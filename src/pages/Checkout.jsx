import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout({ cart }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty. Please add products first!");
      navigate("/");
      return;
    }

    sessionStorage.setItem(
      "checkoutDetails",
      JSON.stringify(formData)
    );

    navigate("/payment");
  };

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1>Checkout</h1>
        <p>Complete your delivery details to continue.</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-4">Delivery Information</h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Delivery Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  rows="3"
                  placeholder="House number, street, area"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">PIN Code</label>
                <input
                  type="text"
                  name="pincode"
                  className="form-control"
                  placeholder="6-digit PIN code"
                  pattern="[0-9]{6}"
                  maxLength="6"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Continue to Payment
              </button>
            </form>

            <Link
              to="/cart"
              className="btn btn-outline-secondary w-100 mt-3"
            >
              Back to Cart
            </Link>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card p-4 shadow-sm">
            <h4>Order Summary</h4>
            <hr />

            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between gap-3 mb-3"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between mb-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}