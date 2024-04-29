import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from 'react-redux';

const Messages = () => {
  useGetMessages();
  const {messages} = useSelector(state => state.messages);
  // if(!messages) return;
  return (
    <div className="overflow-auto">
      {messages && messages.map(message=>{
          return <Message key={message._id} message={message} />
      })}

      {!messages && <div>No messages to shown</div> }
    </div>
    // <div className='overflow-auto'>
    //   <Message/>
    //   <Message/>
    //   <Message/>
    //   <Message/>
    //   <Message/>
    //   <Message/>
    //   <Message/>
    //   <Message/>
    //   <Message/>
      
    // </div>
  )
}

export default Messages
