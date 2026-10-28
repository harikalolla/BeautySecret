import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/Products";

export default function Skincare({ onAddToCart }) {
  const [search, setSearch] = useState("");

  const skincareProducts = products.filter(
    (product) =>
      product.category?.toLowerCase().includes("skincare") ||
      product.category?.toLowerCase().includes("skin care")
  );

  const filteredProducts = skincareProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h1>Skincare Collection</h1>
        <p>Discover your glow with our skincare essentials.</p>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search skincare products..."
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
            <h5>No skincare products found.</h5>
            <p>Add skincare products to your products.js file.</p>
          </div>
        )}
      </div>
    </section>
  );
}