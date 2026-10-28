import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/Products";

export default function Makeup({ onAddToCart }) {
  const [search, setSearch] = useState("");

  const makeupProducts = products.filter(
    (product) => product.category?.toLowerCase() === "makeup"
  );

  const filteredProducts = makeupProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h1>Makeup Collection</h1>
        <p>Find your favourite products and create your own look.</p>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search makeup products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>

      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h5>No makeup products found.</h5>
            <p>Add makeup products to your products.js file.</p>
          </div>
        )}
      </div>
    </section>
  );
}