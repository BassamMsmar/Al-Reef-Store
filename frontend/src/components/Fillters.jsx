import { useEffect } from "react";
import productsStore from "../store/useStore";
import { getCategories } from "../store/api";

export default function Fillters() {
  const { categories, setCategories } = productsStore();

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
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {category.name}
          </label>
        </div>
      ))}
    </div>
  );
}
