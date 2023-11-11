import React from "react";

function Filter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="Filter">
      <label htmlFor="filter">Filter by category:</label>
      <select
        id="filter"
        name="filter"
        value={selectedCategory}
        onChange={onCategoryChange}
      >
        <option value="">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;