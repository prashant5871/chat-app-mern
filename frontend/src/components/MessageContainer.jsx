import React from 'react'
import Messages from './Messages'
import InputMessage from './InputMessage'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[550px] md:h-[80vh] text-white flex flex-col'>
      <div className="user-box flex gap-5 p-4 bg-emerald-800 items-center hover:bg-emerald-700 cursor-pointer">
        <div className="left">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
            </div>
          </div>
        </div>
        <div className="right">
          <p>Prashant Kalsariya</p>
        </div>
      </div>

      <div className="overflow-auto">
        <Messages />
      </div>

      <div className="message-typer">
        <InputMessage />
      </div>
    </div>
  )
}

export default MessageContainer
