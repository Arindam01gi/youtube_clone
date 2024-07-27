import React, { useEffect, useState } from 'react'
import { timeAgo } from '../Helper/TimeCalculation'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_VIDEOS_SEARCH_API } from './constant'

async function getSearchVideoData(query) {
    return fetch(YOUTUBE_VIDEOS_SEARCH_API + query, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) => data.json());
}




const SearchResultContainer = () => {

    const [serachResult, setSearchResult] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()


    const query = searchParams.get('search_query')
    useEffect(() => {
        searchedVideo()
    }, [query])

    // console.log("query", query)

    const searchedVideo = async () => {

        try {
            const resp = await getSearchVideoData(query)
            setSearchResult(resp.items)

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='p-3'>
            {serachResult.length > 0 ? serachResult.map((result, index) => (
                <Link to={`/watch?v=${result?.id?.videoId}`} key={result?.id?.videoId}>
                    <div className='md:flex my-3 p-3'>
                        <div className='md:w-[500px] w-full'>
                            <img
                                src={result?.snippet?.thumbnails?.high?.url}
                                alt='thumbnail'
                                className='w-full h-[250px] rounded-lg object-cover hover:rounded-none'
                            />
                        </div>
                        <div className='mx-3 flex-1 mt-4 md:mt-0'>
                            <h1 className='font-semibold font-sans text-xl'>{result?.snippet?.title}</h1>
                            <p className='text-gray-500 text-sm font-semibold mt-2'>{timeAgo(result?.snippet?.publishTime)}</p>
                            <p className='text-gray-500 text-sm font-semibold mt-2'>{result?.snippet?.channelTitle}</p>
                            <p className='text-gray-500 text-xs font-semibold mt-2'>{result?.snippet?.description}</p>
                        </div>
                    </div>
                </Link>
            )) : (
                <h1>No Video found</h1>
            )}
        </div>
    );

}

export default SearchResultContainer