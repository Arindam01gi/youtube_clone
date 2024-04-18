import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./constant";
import VideoCard from "./VideoCard";

async function getVideosData() {
  return fetch(YOUTUBE_VIDEOS_API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

const VideoContainer = () => {

  const [videos,setVideos] = useState([])


  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const resp = await getVideosData();
      // console.log(resp);
      setVideos(resp.items)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" p-3 flex flex-wrap gap-3">
      {videos.length >0 ? videos.map((video) => {
        return (
          <VideoCard info={video} />
        )
      })
      
      : <h1>Video List is Empty</h1>}
      
    </div>
  );
};

export default VideoContainer;
