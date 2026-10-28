
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ cartCount = 0, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      localStorage.removeItem("beautySecretLoggedIn");
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/home">
          Beauty Secret
        </Link>

        <div className="navbar-nav ms-auto flex-row flex-wrap align-items-center gap-3">
          <Link className="nav-link" to="/home">
            Home
          </Link>

          <Link className="nav-link" to="/skincare">
            Skincare
          </Link>

          <Link className="nav-link" to="/makeup">
            Makeup
          </Link>

          <Link className="nav-link" to="/blog">
            Blog
          </Link>

          <Link className="nav-link" to="/cart">
            Cart ({cartCount})
          </Link>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
