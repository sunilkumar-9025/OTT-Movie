import React from "react";

function Searchbox({ seachValue, setSearchValue }) {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        type="text"
        value={seachValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="type to search..."
      />
    </div>
  );
}

export default Searchbox;
