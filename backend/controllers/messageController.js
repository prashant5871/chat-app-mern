import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
    try {
        const senderId = req.id;
        const recieverId = req.params.id;
        const { message } = req.body;

        let gotConversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] }
        })

        if (!gotConversation) {
            gotConversation = await Conversation.create(
                {
                    participants: [senderId, recieverId]
                }
            )
        }

        const newMessage = await Message.create({
            senderId,
            recieverId,
            message
        })

        if (newMessage) {
            gotConversation.messages.push(newMessage._id);
        }

        gotConversation.save();

        // Here will be logic of Socket.io

        //send response
        return res.json({ message: "Messege sent succesfully..." })

    } catch (error) {
        console.log(error);
    }
}


export const getMessage = async (req,res) => {
    const recieverId = req.params.id;
    const senderId = req.id;

    const conversation = await Conversation.findOne({
        participants:{$all : [senderId,recieverId]}
    }).populate("messages");
    // console.log(conversation);

    return res.json(conversation?.messages)
}

