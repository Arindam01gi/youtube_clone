import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsConatiner from "./CommentsConatiner";
import YoutubeCommentsContainer from "./YoutubeCommentsConainer";
import LiveComments from "./LiveComments";

const Watchpage = () => {
  const dispatch = useDispatch();

  const [searchParams,setSearchParams] = useSearchParams();

   const id = searchParams.get("v")
  //  console.log(id)

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex md:gap-5 overflow-x-hidden">

    <div className="px-4 md:ml-12  ml-0  md:w-[60.5%] w-full">
      <iframe
      className="rounded-lg md:w-[890px] md:h-[500px] h-[270px] w-full"
        // width="890"
        // height="500"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* <CommentsConatiner/> */}
      <YoutubeCommentsContainer id={id}/>
    </div>
    
       <LiveComments/>
  
    </div>
  );
};

export default Watchpage;
