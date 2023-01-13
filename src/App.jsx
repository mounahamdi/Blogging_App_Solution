import React,{useState,useEffect} from "react";

import AllPosts from "./components/AllPosts.jsx";
import Search from "./components/Search.jsx";
import OnePost from "./components/OnePost.jsx";
import CreatePost from "./components/CreatePost.jsx";
import dummyData from "./data/exampleBlogData.js"
import axios from "axios";

function App(props){
  const [username,setUsername] = useState(window.location.search.substring(10))
  const [view,setView] = useState("allPosts")
  const [data,setData] = useState(dummyData)
  const [one,setOne] = useState({})
  const [search,setSearch] = useState("")

  const  changeView = (view)=> {
    setView(view);
  }

  const getOnePost = (one)=>{
    setOne(one);
    setView("onePost")
  }
  const renderView = ()=> {
      if (view === "allPosts") {
        return <AllPosts data={data} getOnePost={getOnePost}/>;
      } else if (view === "onePost") {
        return <OnePost one={one}/>;
      } else if (view === "createPost") {
        return <CreatePost/>;
      }
    }

  const searchBlog = (query)=>{
      setSearch(query)
    }

    useEffect(()=>{
      search?
      axios.get("https://react-blogging-app.onrender.com/api/blogs/"+search)
      .then((response)=>{setData(response.data)}):
      axios.get("https://react-blogging-app.onrender.com/api/blogs").then((response)=>{
        setData(response.data)
    })},[search])

  return (
    <div>
      <nav className=" nav">
        <div
          className={
            view !== "createPost"
              ? "nav-unselected"
              : "nav-selected"
          }
          onClick={() => {
            changeView("createPost");
          }}
        >
          Create Post
        </div>
        <div
          className={
            view === "allPosts" ? "nav-selected" : "nav-unselected"
          }
          onClick={() => changeView("allPosts")}
        >
          All Posts
        </div>
        <div>
          <Search search={searchBlog}/>
        </div>
      </nav>

      {renderView()}
    </div>
  );
}

export default App;
