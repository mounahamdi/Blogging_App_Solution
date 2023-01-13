import React from "react";
import moment from "moment/moment";

const PostDetails = ({blog,getOnePost}) => (
  <div className="blog-list-item">
      <div className="blog-list-item-title" onClick={()=>getOnePost(blog)}>{blog.title}</div>
      <div className="blog-list-item-byline">
        <span className="blog-list-item-byline-author">{blog.author}  </span>
        {moment(blog.published_at).fromNow()}
      </div>
      <div className="blog-list-item-lede">
        <img src={blog.imageUrl} alt="no content" />
      </div>
    </div>
);

export default PostDetails;