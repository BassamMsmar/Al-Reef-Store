import "bootstrap/dist/css/bootstrap.min.css";

import ProductsList from "./components/ProductsList";
import Fillters from "./components/Fillters";

import "./App.css";

function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <Fillters />
          </div>
          <div className="col-lg-9">
            <ProductsList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
