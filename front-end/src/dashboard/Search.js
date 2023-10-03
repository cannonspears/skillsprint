import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="searchContainer">
      <div class="input-group">
        <input
          type="search"
          id="search"
          class="form-control"
        />

        <button
          type="button"
          class="btn btn-primary"
        >
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Search;
