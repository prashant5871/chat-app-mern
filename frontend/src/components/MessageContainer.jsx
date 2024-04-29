import React from 'react'
import Messages from './Messages'
import InputMessage from './InputMessage'
import { useSelector } from 'react-redux'
import { useRef,useEffect } from 'react'

const MessageContainer = () => {
  const { selectedUser } = useSelector(state => state.user);
  const {messages} = useSelector(state => state.messages); // Assuming you have a messages state in your Redux store

  const messageContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [selectedUser, messages]); // Update the dependency array

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className='md:min-w-[550px] md:h-[80vh] text-white flex flex-col'>
      {selectedUser && <div className='md:min-w-[550px] md:h-[80vh] text-white flex flex-col'>
        <div className="user-box flex gap-5 p-4 bg-emerald-800 items-center hover:bg-emerald-700 cursor-pointer">
          <div className="left">
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img src={selectedUser.profilePhoto} />
              </div>
            </div>
          </div>
          <div className="right">
            <p>{selectedUser.fullName}</p>
          </div>
        </div>

        <div className="overflow-auto h-full" ref={messageContainerRef}>
          <Messages />
        </div>

        <div className="message-typer">
          <InputMessage />
        </div>
      </div>
      }

      {!selectedUser && "No user selected"}
    </div>
  )
}

export default MessageContainer
