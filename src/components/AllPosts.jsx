import React from "react";
import PostDetails from "./PostDetails.jsx";

const AllPosts = ({data,getOnePost}) => (
  <div className="all-post">
    {data.map((blog,i)=><PostDetails blog={blog} key={i} getOnePost={getOnePost}/>)}
  </div>
);

export default AllPosts;