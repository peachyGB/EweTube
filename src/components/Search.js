import React, { useState } from "react";

function Search({ onNewSearch }) {
  const [newSearch, setNewSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    onNewSearch(newSearch);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
      />

      <button type="subimt">🔍</button>
    </form>
  );
}

export default Search;
