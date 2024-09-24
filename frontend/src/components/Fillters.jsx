import { useEffect } from "react";
import productsStore from "../store/useStore";
import { getCategories } from "../store/api";

export default function Fillters() {
  const { categories, setCategories, filter, setFilter } = productsStore();

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((category) => (
        <div className="form-check" key={category.id}>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) => {
              if (e.target.checked) {
                setFilter({
                  ...filter,
                  category: [...filter.category, category.name],
                });
              } else {
                setFilter({
                  ...filter,
                  category: filter.category.filter((c) => c != category.name),
                });
              }
            }}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {category.name}
          </label>
        </div>
      ))}
      <hr />
      <div className="input-group">
        <span className="input-group-text">Min Price</span>
        <input type="text" aria-label="First name" className="form-control" value={filter.rangePrice[0]}/>
      </div>
      <div className="input-group my-2">
        <span className="input-group-text">Max Price</span>
        <input type="text" aria-label="Last name" className="form-control" value={filter.rangePrice[1]}/>
      </div>
    </div>
  );
}
