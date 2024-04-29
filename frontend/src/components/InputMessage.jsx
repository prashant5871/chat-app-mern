import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { IoSend } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const InputMessage = () => {
    const [message, setMessage] = useState("")
    const { authUser } = useSelector((state) => state.user);
    const { selectedUser } = useSelector(store => store.user)
    const { messages } = useSelector(state => state.messages)
    const dispatch = useDispatch();
    const handleChange = async (event) => {
        setMessage(event.target.value)
        // console.log(selectedUser);
        // console.log(event.target.value)
    }

    const sendMessage = async (event) => {
        try {
            event.preventDefault();
            console.log(selectedUser);
            const recieverId = selectedUser._id;
            console.log("sending request");

            const response = await axios.post(`http://localhost:3500/api/message/send/${recieverId}`,
                {
                    message: message
                }
            )
            console.log("after sending request...")
            console.log(messages);

            const allMessages = await axios.get(`http://localhost:3500/api/message/${selectedUser._id}`)
            console.log(allMessages);
            dispatch(setMessages(allMessages.data))

            console.log(response)
            setMessage("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={sendMessage} action="" method='POST'>
                <div className='relative m-2'>
                    <input value={message} onChange={handleChange} type="text" placeholder="Type here" className="text-black input input-bordered input-success w-full" />
                    <button className='absolute end-0 inset-y-0 mr-5'><div
                        style={{
                            backgroundColor: "#ffffff",
                        }}
                    >
                        <IoSend
                            style={{
                                color: "#006106",
                            }}
                        />
                    </div></button>

                </div>
            </form>
        </div>
    )
}

export default InputMessage
