import React from "react";
import { Link } from "react-router-dom";


const VideoCard = ({ info }) => {
  return (
    <div>
      <Link to="/watch">
      
      <img
        className="rounded-lg w-[400px] h-[250px]"
        alt="thumbnail"
        src={info?.snippet?.thumbnails?.standard?.url}
      />
      <div className="w-[400px]">
        <p className="mt-2 font-bold">{info?.snippet?.title}</p>
        <ul className="text-gray-500">
          <li>{info?.snippet?.channelTitle}</li>
          <li >{Math.round(info?.statistics?.viewCount/1000)}K views</li>
        </ul>
      </div>
      </Link>
      
    </div>
  );
};

export default VideoCard;
