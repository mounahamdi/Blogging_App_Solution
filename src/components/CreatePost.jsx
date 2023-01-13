import axios from "axios";
import React, { useState } from "react";

function CreatePost(){

const [title,setTitle] = useState("")
const [author,setAuthor] = useState(window.location.search.substring(10))
const [content,setContent] = useState("")

const postBlog = ()=>{
  axios.post("https://react-blogging-app.onrender.com/api/blogs",
  {author:author, title:title, body:content}).then((response)=>console.log(response))
}

  return (
    <div className="blog-list-item">
    <h1 className="New-Post-Title">New Post</h1>
    <form className="New-Post-Form">
      <input
        id="title"
        type="text"
        className="search"
        placeholder="Title"
        required
        minLength="3"
        defaultValue={title}
      onChange={(event)=>setTitle(event.target.value)}/>

      <textarea
        id="content"
        className="post "
        placeholder="Content..."
        required
        minLength="20"
        defaultValue={content}
        onChange={(event)=>setContent(event.target.value)}/>

      <input
        className="btn btn-secondary searchButton"
        type="button"
        value="Publish"
      onClick={postBlog}/>
    </form>
  </div>
  )}



export default CreatePost;