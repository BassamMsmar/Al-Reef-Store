import { useEffect } from "react";
import productsStore from "../store/useStore";
import { getProducts } from "../store/api";

export default function ProductsList() {
  const { products, setProducts } = productsStore();

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted small bg-light p-2 rounded">
                  {product.category.name}
                </p>
                <p className="card-text">{product.price} $</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
