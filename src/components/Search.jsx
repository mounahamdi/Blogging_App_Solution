import React,{useState} from "react";

const Search = ({search}) => {
  const [query,setQuery] = useState("")
  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search for..."
        defaultValue=""
      onChange={(event)=>{setQuery(event.target.value)}}/>
      <button className="btn btn-secondary searchButton" onClick={()=>{search(query)}} type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
