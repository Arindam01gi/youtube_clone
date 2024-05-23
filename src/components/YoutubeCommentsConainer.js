import React, { useEffect, useState } from 'react'
import { API_KEY, MAX_RESULTS } from './constant';


async function getCommentsData(id) {
  const url = `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&videoId=${id}&maxResults=${MAX_RESULTS}&key=` + API_KEY

  return fetch(url, {
    method: "GET",
    headers: {
      'Content-Type': "applications/json"
    }
  }).then((data) => data.json())

}



const YoutubeCommentsContainer = ({ id }) => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    commnetsData();
  }, [])

  const commnetsData = async () => {

    try {
      const resp = await getCommentsData(id)
      setComments(resp.items)

    } catch (e) {
      console.log(e)
    }

  }


  return (
    <div className='my-5 bg-gray-100 shadow-sm p-2 rounded-lg'>
      <h1 className="text-2xl font-bold">Comments</h1>
      <div className='mx-3'>
        {comments && comments.length > 0 ? (
          <>{
            comments.map((comment, i) => {
              return (
                <div className='flex my-5' key={`${i}-comments`}>
                  <img
                    src={encodeURI(comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl)}
                    alt=''
                    className="h-12 w-12 rounded-full"
                  // onError={(e) => { e.target.src = 'path_to_placeholder_image'; }}
                  />
                  <div>
                    <p className='px-3 text-xs text-gray-400'><span className='text-sm font-bold text-black mr-3'>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</span> {comment?.snippet?.topLevelComment?.snippet?.publishedAt}</p>
                    <p className='text-sm px-3 py-1'>
                      {comment?.snippet?.topLevelComment?.snippet?.textOriginal.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line.split(' ').map((word, wordIndex) => (
                            word.startsWith('http') ? (
                              <a key={wordIndex} href={word} className="text-blue-500 underline">
                                {word}
                              </a>
                            ) : (
                              <React.Fragment key={wordIndex}>{word} </React.Fragment>
                            )
                          ))}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>

                    <p className='px-3 py-1 text-gray-600'>
                      <span> <i className='fa-regular fa-thumbs-up'></i> </span>
                      <span>{comment?.snippet?.topLevelComment?.snippet?.likeCount > 1000 ? (comment?.snippet?.topLevelComment?.snippet?.likeCount / 1000) + 'k' : comment?.snippet?.topLevelComment?.snippet?.likeCount}</span>
                      <span className='mx-2'><i class="fa-regular fa-thumbs-down"></i></span>
                    </p>

                  </div>
                </div>
              )
            })
          }
          </>

        ) : "no Comments"}


      </div>
    </div>
  )
}

export default YoutubeCommentsContainer