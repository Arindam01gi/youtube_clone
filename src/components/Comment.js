import React from 'react'

const Comment = ({ data }) => {
    // console.log("data", data)

    return (
        <div className='flex  p-4'>
            <img
                src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
                alt="user_icon"
                className="h-6 w-6"
            />
            <div className='px-3'>
                <p className='font-bold'>{data?.name} </p>
                <p className=''>{data?.text}</p>
            </div>
              
        </div>
    )
}

export default Comment