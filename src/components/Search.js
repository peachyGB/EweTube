import React, { useState } from "react";

function Search({ onNewSearch }) {
  const [newSearch, setNewSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    onNewSearch(newSearch);
  }

  return (
    <form onSubmit={handleSearch}>
      <div class="input-group rounded border border-dark">
      <input
        class="form-control rounded" 
        type="text"
        id="search"
        placeholder="Search..."
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
      />
      <button class="input-group-text border-0 fas fa-search" type="submit"></button>
      <button onClick={(e) => setNewSearch("")}>clear</button>
      </div>
      
      
    </form>
  );
}

export default Search;
