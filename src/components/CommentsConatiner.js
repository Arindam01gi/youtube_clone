import React from "react";
import { CommentsData } from "./constant";
import CommentList from "./CommentList";

const CommentsConatiner = () => {
  return (
    <div className="my-5 bg-gray-100 shadow-sm p-2 rounded-lg">
      <h1 className="text-2xl font-bold">Comment</h1>
      <div> <CommentList comments={CommentsData} /></div>
    </div>
  );
};

export default CommentsConatiner;
