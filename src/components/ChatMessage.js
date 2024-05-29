import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
     <div className='flex my-2'>
        <img
            src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
            alt="user_icon"
            className="h-6"
          />
        <p className='ml-3  text-sm font-semibold text-gray-600'> { name }</p>
        <p className='ml-3  text-sm  '> { message }</p>
     </div>
  )
}

export default ChatMessage