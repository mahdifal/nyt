import React from "react";

function SearchInput({ onChangeHandler }) {
  return (
    <div>
      <h1>Search List</h1>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder="Search a article ..."
      />
    </div>
  );
}

export default SearchInput;
