import React, {useState} from "react";

function Filter({ onSearchChange }) {
  const [category, setCategory] = useState("All");
  const [searchText, setSearchText] = useState('');
  function onCategoryChange(event){
    setCategory(event.target.value);
  }
  return (
    <div className="Filter">
      <input type="text" value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          onSearchChange(e.target.value); // Notify parent about the change
        }} placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
