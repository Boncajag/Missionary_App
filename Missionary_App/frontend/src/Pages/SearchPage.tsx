import React from "react";

const SearchPage: React.FC = () => {
  return (
      <div className="search-container">
        <h1>Missionary Search</h1>
        <input className="search-input" type="text" placeholder="Name"/>
        <input className="search-input" type="text" placeholder="Mission"/>
        <input className="search-input" type="text" placeholder="Hometown"/>
        <button className="search-button">Search</button>
      </div>

  );
};

export default SearchPage;
