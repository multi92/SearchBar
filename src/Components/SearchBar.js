import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";


function SearchBar({ placeholder, data }) {
  // 1.currentState 2.updateState
  const [filterData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const clearInput = () => {
    setFilteredData([]);
    // setWordEntered("");
  };
  return (
    <div className="search">
      {/* search input */}
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered}></input>
        <div className="searchIcon">
          {/* if filterData empty->SearchIcon or CloseIcon */}
          {filterData.length === 0 ? (<SearchIcon/>) : (<CloseIcon id="clearBtn" onclick={clearInput} />)}
        </div>
      </div>
      {/* if filterData!= 0 render */}
      {filterData.length != 0 && (
        <div className="dataReasult">
          {filterData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{ value.title }</p>
              </a>
            )
          })}


        </div>
      )}
    </div>
  );
}

export default SearchBar;
