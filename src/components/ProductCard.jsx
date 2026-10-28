export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card h-100">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="p-3">
        <h5>{product.name}</h5>
        <p className="text-muted">{product.category}</p>

        <div className="d-flex justify-content-between align-items-center">
          <strong>₹{product.price}</strong>

          <button
            className="btn btn-dark btn-sm"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}