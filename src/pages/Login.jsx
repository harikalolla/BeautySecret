
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password) {
      alert("Please enter your email and password.");
      return;
    }

    let savedUser;

    try {
      savedUser = JSON.parse(
        localStorage.getItem("beautySecretUser") || "null"
      );
    } catch {
      alert("Something went wrong. Please sign up again.");
      return;
    }

    if (!savedUser) {
      alert("Account not found. Please sign up first.");
      navigate("/signup");
      return;
    }

    if (
      savedUser.email.toLowerCase() === email.trim().toLowerCase() &&
      savedUser.password === password
    ) {
      localStorage.setItem(
        "beautySecretLoggedIn",
        JSON.stringify({
          name: savedUser.name,
          email: savedUser.email,
        })
      );

      alert(`Welcome to Beauty Secret, ${savedUser.name}!`);
      navigate("/home");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Beauty Secret</h1>

        <p className="auth-subtitle">
          Welcome back! Discover your beauty ✨
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/signup">Create Account</Link>
        </p>

        <p className="text-center mt-3 mb-0">
          <small>✨ Your beauty journey starts here ✨</small>
        </p>
      </div>
    </div>
  );
}
