import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {

    return comments.map((comment, index) => {
        return (
            <div key={`${index}-comment`}>
                <Comment data={comment}  />
                <div className='pl-5 border border-l-black'>
                    <CommentList comments={comment.replies} />
                </div>
            </div>
        )
    })

}

export default CommentList