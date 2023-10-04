import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="searchContainer">
      <div className="input-group">
        <input
          type="search"
          id="search"
          className="form-control"
        />

        <button
          type="button"
          className="btn btn-primary"
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Search;
