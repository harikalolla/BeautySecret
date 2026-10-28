
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Skincare from "./pages/Skincare";
import Makeup from "./pages/Makeup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/blog";

import "./App.css";

// Protect pages that require login
function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("beautySecretLoggedIn");

  return loggedIn ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const location = useLocation();

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  const loggedIn = Boolean(
    localStorage.getItem("beautySecretLoggedIn")
  );

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add products to cart
  function handleAddToCart(product) {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });

    alert(`${product.name} added to cart!`);
  }

  // Logout
  function handleLogout() {
    localStorage.removeItem("beautySecretLoggedIn");
    window.location.href = `${import.meta.env.BASE_URL}login`;
  }

  // Hide Navbar on Login and Signup pages
  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && (
        <Navbar
          cartCount={cart.reduce(
            (total, item) => total + (item.quantity || 0),
            0
          )}
          onLogout={handleLogout}
        />
      )}

      <Routes>
        {/* Login and Signup */}
        <Route
          path="/"
          element={
            loggedIn ? <Navigate to="/home" replace /> : <Login />
          }
        />

        <Route
          path="/login"
          element={
            loggedIn ? <Navigate to="/home" replace /> : <Login />
          }
        />

        <Route
          path="/signup"
          element={
            loggedIn ? <Navigate to="/home" replace /> : <Signup />
          }
        />

        {/* Home */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home onAddToCart={handleAddToCart} />
            </ProtectedRoute>
          }
        />

        {/* Skincare */}
        <Route
          path="/skincare"
          element={
            <ProtectedRoute>
              <Skincare onAddToCart={handleAddToCart} />
            </ProtectedRoute>
          }
        />

        {/* Makeup */}
        <Route
          path="/makeup"
          element={
            <ProtectedRoute>
              <Makeup onAddToCart={handleAddToCart} />
            </ProtectedRoute>
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart cart={cart} setCart={setCart} />
            </ProtectedRoute>
          }
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout cart={cart} />
            </ProtectedRoute>
          }
        />

        {/* Payment */}
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment cart={cart} setCart={setCart} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />

        {/* Unknown routes */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}
