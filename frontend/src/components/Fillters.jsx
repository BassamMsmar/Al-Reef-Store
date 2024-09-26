import { useEffect, useState } from "react";
import productsStore from "../store/useStore";
import { getCategories } from "../store/api";

export default function Fillters() {
  const { categories, setCategories, filters, setFilters } = productsStore();

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  const hendelCategoryChange = (e) => {
    const { value, checked } = e.target;
    const newCategories = checked
      ? [...filters.category, value]
      : filters.category.filter((category) => category != value);

    setFilters({ ...filters, category: newCategories });
  };

  
  const hendelPriceChange = (e) => {
    const { value, checked } = e.target;
    console.log(checked, value);
  };

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((category) => (
        <div className="form-check" key={category.id}>
          <input
            className="form-check-input"
            type="checkbox"
            value={`${category.id}`}
            id={`flexCheckDefault${category.id}`}
            onChange={hendelCategoryChange}
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault"
            id={`flexCheckDefault${category.id}`}
          >
            {category.name}
          </label>
        </div>
      ))}
      <hr />
      <h2>Price</h2>
      <div className="input-group my-2">
        <span className="input-group-text">Max Price</span>
        <input
          type="text"
          aria-label="Minimum price"
          className="form-control"
          value={filters.priceRange[0]}
          onChange={hendelPriceChange}
        />
      </div>
      <div className="input-group">
        <span className="input-group-text">Min Price</span>
        <input
          type="text"
          aria-label="Maximum price"
          className="form-control"
          value={filters.priceRange[1]}
          onChange={hendelPriceChange}
        />
      </div>
    </div>
  );
}
