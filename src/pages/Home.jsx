import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/Products";

export default function Home({ onAddToCart }) {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 hero-content">
              <span className="hero-eyebrow">
                YOUR BEAUTY, YOUR WAY
              </span>

              <h1>
                Reveal Your
                <br />
                Natural <span>Glow</span>
              </h1>

              <p>
                Discover skincare and makeup essentials that make
                every day feel beautiful.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Link to="/skincare" className="primary-btn">
                  Shop Skincare
                </Link>

                <Link to="/makeup" className="secondary-btn">
                  Explore Makeup
                </Link>
              </div>

              <div className="hero-note mt-4">
                <i className="bi bi-heart-fill"></i>
                A little self-care goes a long way.
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000"
                  alt="Beauty and skincare collection"
                  className="hero-image"
                />

                <div className="hero-floating-card">
                  <i className="bi bi-stars"></i>
                  <div>
                    <strong>Your daily glow</strong>
                    <small>Starts with self-care</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-4">
          <span className="section-eyebrow">FIND YOUR FAVOURITES</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="text-muted">
            Your beauty routine starts here.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <Link to="/skincare" className="category-card skincare-category">
              <div>
                <span>CARE FOR YOUR SKIN</span>
                <h3>Skincare Essentials</h3>
                <span className="category-link">Explore collection →</span>
              </div>
            </Link>
          </div>

          <div className="col-md-6">
            <Link to="/makeup" className="category-card makeup-category">
              <div>
                <span>EXPRESS YOURSELF</span>
                <h3>Makeup Must-Haves</h3>
                <span className="category-link">Explore collection →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-section py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-3">
            <div>
              <span className="section-eyebrow">LOVED BY BEAUTY FANS</span>
              <h2 className="section-title mb-0">Our Bestsellers</h2>
            </div>

            <Link to="/skincare" className="view-all-link">
              View all products →
            </Link>
          </div>

          <div className="row g-4">
            {products.slice(0, 4).map((product) => (
              <div className="col-6 col-lg-3" key={product.id}>
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="selfcare-banner text-center">
          <span className="section-eyebrow">A MOMENT JUST FOR YOU</span>
          <h2>Your Beauty. Your Confidence. Your Secret.</h2>
          <p>
            Celebrate your own kind of beauty with products made for your
            daily routine.
          </p>
          <Link to="/makeup" className="primary-btn">
            Discover Your Favourites
          </Link>
        </div>
      </section>
    </>
  );
}