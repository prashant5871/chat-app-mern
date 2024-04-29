import React from 'react'
import { useSelector } from 'react-redux'

const Message = ({message}) => {
    const {selectedUser,authUser} = useSelector(state=>state.user)
    
    return (
        <div className='overflow-auto'>
            <div className={"chat " + (selectedUser?._id == message.senderId ? "chat-start" : "chat-end")}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">{message.message}</div>
            </div>

        </div>
    )
}

export default Message
