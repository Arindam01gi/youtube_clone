import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../Helper/nameGenerator';
import { generateRandomString } from '../Helper/StringGenerator';

const LiveComments = () => {

  const [liveMessage,setLiveMessage] = useState("")

  const dispatch = useDispatch();
  const ChatMessages = useSelector(store => store.chat.messages)


  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: generateRandomString(30)
      }))

    }, 2000)
    return () => clearInterval(i);
  }, [])


  return (
    <div>
      <div className="w-full h-[500px] border border-slate-400 mx-3 rounded-top shadow-sm overflow-y-scroll ">
        <p className='p-4'> Top Chat</p>
        <hr className='' />
        <div className='m-2 flex-col-reverse flex'>
          {ChatMessages && ChatMessages.map((chat, index) => {

            return <ChatMessage name={chat.name} message={chat.message} key={index} />
          })}
        </div>

      </div>
      <form className='w-full  border border-slate-400 mx-3 rounded-b-md py-2' onSubmit={(e) =>{
        e.preventDefault()
        dispatch(addMessage({
          "name":"Arindam Maiti",
          "message": liveMessage
        }))
      }}>
        <input type="text" className='w-4/5 px-2 mx-2' onChange={(e) =>setLiveMessage(e.target.value)} />
        <button className=' px-1'> <i className='fa fa-paper-plane text-blue-400' ></i> </button>
      </form>

    </div>


  )
}

export default LiveComments