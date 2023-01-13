import React from "react";
import moment from "moment/moment";
import parse from 'html-react-parser';

const OnePost = ({one}) => (
  <div className="blog-list-item" >
    <div className="blog-list-item-title">{one.title}</div>
    <div className="blog-list-item-byline">
      <span className="blog-list-item-byline-author"> {one.author}, </span>
      {moment(one.published_at).fromNow()}
    </div>
    <div className="blog-list-item-lede"> {one.content?parse(one.content):one.body} </div>
  </div>
);

export default OnePost;