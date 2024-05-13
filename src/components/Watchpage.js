import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsConatiner from "./CommentsConatiner";

const Watchpage = () => {
  const dispatch = useDispatch();

  const [searchParams,setSearchParams] = useSearchParams();

   const id = searchParams.get("v")
  //  console.log(id)

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-5  w-[55%]">
      <iframe
      className="rounded-lg"
        width="800"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <CommentsConatiner/>
    </div>
  );
};

export default Watchpage;
