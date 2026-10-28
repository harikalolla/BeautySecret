
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    let existingUser;

    try {
      existingUser = JSON.parse(
        localStorage.getItem("beautySecretUser") || "null"
      );
    } catch {
      alert("Unable to read account details. Please try again.");
      return;
    }

    if (
      existingUser &&
      existingUser.email.toLowerCase() === email.trim().toLowerCase()
    ) {
      alert("This email is already registered. Please log in.");
      navigate("/login");
      return;
    }

    const user = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
    };

    try {
      localStorage.setItem("beautySecretUser", JSON.stringify(user));
      localStorage.removeItem("beautySecretLoggedIn");

      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch {
      alert("Unable to save your account. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Beauty Secret</h1>

        <p className="auth-subtitle">
          Create your beauty account ✨
        </p>

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="signup-email" className="form-label">
              Email Address
            </label>

            <input
              id="signup-email"
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="signup-password" className="form-label">
              Password
            </label>

            <input
              id="signup-password"
              type="password"
              name="password"
              className="form-control"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              minLength={6}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>

            <input
              id="confirm-password"
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
