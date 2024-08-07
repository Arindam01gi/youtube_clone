import React from "react";
import { Link } from "react-router-dom";
import { timeAgo } from "../Helper/TimeCalculation";


const VideoCard = ({ info }) => {
  return (
    <div>
      <Link to={`/watch?v=${info?.id}`}>

        <img
          className="rounded-lg md:w-[400px] w-full h-[230px] object-cover"
          alt="thumbnail"
          src={info?.snippet?.thumbnails?.standard?.url}
        />
        <div className="md:w-[400px] w-full">
          <p className="mt-2 font-bold">{info?.snippet?.title}</p>
          <ul className="text-gray-500">
            <li>{info?.snippet?.channelTitle}</li>
            <li >
              <p>
                {Math.round(info?.statistics?.viewCount / 1000)}K views
                • {timeAgo(info?.snippet?.publishedAt)}</p>

            </li>
          </ul>
        </div>
      </Link>

    </div>
  );
};

export default VideoCard;
