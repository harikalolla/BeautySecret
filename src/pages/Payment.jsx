import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Payment({ cart, setCart }) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      navigate("/");
      return;
    }

    const checkoutDetails = sessionStorage.getItem("checkoutDetails");

    if (!checkoutDetails) {
      alert("Please complete checkout details first.");
      navigate("/checkout");
      return;
    }

    const order = {
      orderId: `BS${Date.now()}`,
      items: cart,
      total: totalPrice,
      paymentMethod,
      customer: JSON.parse(checkoutDetails),
      orderDate: new Date().toLocaleString(),
      status: "Demo Order Placed",
    };

    sessionStorage.setItem("lastOrder", JSON.stringify(order));

    setCart([]);
    sessionStorage.removeItem("checkoutDetails");
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    const order = JSON.parse(sessionStorage.getItem("lastOrder"));

    return (
      <section className="container py-5 text-center">
        <i className="bi bi-check-circle-fill text-success display-1"></i>

        <h1 className="mt-3">Order Placed Successfully!</h1>
        <p className="text-muted">
          Thank you for shopping with Beauty Secret. 💗
        </p>

        <div className="card shadow-sm p-4 mx-auto mt-4 text-start" style={{ maxWidth: "500px" }}>
          <h4>Order Details</h4>
          <hr />
          <p><strong>Order ID:</strong> {order.orderId}</p>
          <p><strong>Amount:</strong> ₹{order.total}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod.toUpperCase()}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Customer:</strong> {order.customer.fullName}</p>
        </div>

        <Link to="/" className="btn btn-dark mt-4">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1>Payment</h1>
        <p>Choose your preferred payment method.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-sm p-4">
            <h4>Order Total</h4>
            <h2 className="mb-4">₹{totalPrice}</h2>

            <form onSubmit={handlePayment}>
              <h5 className="mb-3">Select Payment Method</h5>

              <label className="border rounded p-3 mb-3 d-flex align-items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                />
                <i className="bi bi-phone fs-3"></i>
                <span>UPI</span>
              </label>

              <label className="border rounded p-3 mb-3 d-flex align-items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                />
                <i className="bi bi-credit-card fs-3"></i>
                <span>Credit / Debit Card</span>
              </label>

              <label className="border rounded p-3 mb-4 d-flex align-items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                />
                <i className="bi bi-cash-stack fs-3"></i>
                <span>Cash on Delivery</span>
              </label>

              <div className="alert alert-info">
                Demo only: this page does not process real payments.
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Place Demo Order — ₹{totalPrice}
              </button>
            </form>

            <Link to="/checkout" className="btn btn-outline-secondary w-100 mt-3">
              Back to Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}