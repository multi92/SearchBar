import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";


function SearchBar({ placeholder, data }) {
  // 1.currentState 2.updateState
  const [filterData, setFilteredData] = useState([]);

  const clearInput = () => {
    setFilteredData([]);
    // setWordEntered("");
  };
  return (
    <div className="search">
      {/* search input */}
      <div className="searchInputs">
        <input type="text" placeholder="Type text"></input>
        <div className="searchIcon">
          {filterData.length === 0 ? (<SearchIcon/>) : (<CloseIcon id="clearBtn" onclick={clearInput} />)}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
