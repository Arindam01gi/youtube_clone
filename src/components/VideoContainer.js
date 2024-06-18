import React, { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_VIDEOS_API } from "./constant";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

async function getVideosData() {
  

  return fetch(YOUTUBE_VIDEOS_API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

const VideoContainer = () => {
  const selectedSuggestions = useSelector((store) => store.suggestion)
  // console.log("selectedSuggestions", selectedSuggestions)

  const [videos, setVideos] = useState([])


  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const resp = await getVideosData();
      // console.log(resp);
      setVideos(resp.items)
      // console.log('videos',videos)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" p-3 flex flex-wrap gap-5">
      { videos && videos.length > 0 ? videos.map((video) => {
        return (
          <VideoCard info={video} key={video.id} />
        )
      })

        : <h1>Video List is Empty</h1>}

    </div>
  );
};

export default VideoContainer;
