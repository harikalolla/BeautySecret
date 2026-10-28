import { Link } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const increaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeProduct = (id) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="container py-5">
      <h1 className="mb-4">My Shopping Cart 🛍️</h1>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-bag display-1"></i>
          <h3 className="mt-3">Your cart is empty!</h3>
          <p>Add your favourite beauty products to get started.</p>

          <Link to="/" className="btn btn-dark mt-2">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="row g-4">
            <div className="col-lg-8">
              {cart.map((item) => (
                <div
                  className="card mb-3 p-3"
                  key={item.id}
                >
                  <div className="row align-items-center g-3">
                    <div className="col-4 col-md-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{
                          width: "150px",
                          height: "130px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="col-8 col-md-9">
                      <h5>{item.name}</h5>
                      <p className="text-muted mb-2">
                        ₹{item.price}
                      </p>

                      <div className="d-flex align-items-center gap-2 flex-wrap">
                        <button
                          className="btn btn-outline-dark btn-sm"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          className="btn btn-outline-dark btn-sm"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>

                        <button
                          className="btn btn-outline-danger btn-sm ms-md-3"
                          onClick={() => removeProduct(item.id)}
                        >
                          <i className="bi bi-trash"></i> Remove
                        </button>
                      </div>

                      <p className="mt-2 mb-0 fw-bold">
                        Subtotal: ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="card p-4 shadow-sm">
                <h4>Order Summary</h4>
                <hr />

                <div className="d-flex justify-content-between mb-3">
                  <span>Total Items</span>
                  <span>
                    {cart.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>

                <Link
                  to="/checkout"
                  className="btn btn-dark w-100"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  to="/"
                  className="btn btn-outline-dark w-100 mt-2"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}