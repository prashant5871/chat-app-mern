import React from 'react'
import { useSelector } from 'react-redux'

const Message = ({ message }) => {
    const { selectedUser, authUser } = useSelector(state => state.user)
    // console.log(selectedUser);
    const dateString = message.createdAt;
    const date = new Date(dateString);

    const hours = date.getHours().toString().padStart(2, "0"); // Get hours and ensure it's 2 digits
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Get minutes and ensure it's 2 digits

    const formattedTime = `${hours}:${minutes}`; // Construct the time string in "hh:mm" format


    return (
        <div className='overflow-auto'>
            <div className={"chat " + (selectedUser?._id == message.senderId ? "chat-start" : "chat-end")}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={selectedUser?._id == message.senderId ? selectedUser?.profilePhoto : authUser?.profilePhoto} />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="text-xs opacity-50">{formattedTime}</time>
                </div>
                <div className="chat-bubble">{message.message}</div>
            </div>

        </div>
    )
}

export default Message
