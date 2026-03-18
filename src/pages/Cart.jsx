import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  // ➕ qty +
  const increase = (id, size) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.size === size
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ➖ qty -
  const decrease = (id, size) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id && item.size === size
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  // ❌ remove
  const removeItem = (id, size) => {
    setCart(prev =>
      prev.filter(item => !(item.id === id && item.size === size))
    );
  };

  // 💰 total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <main className="cart">

      {/* 🔝 TOP */}
      <div className="cart__top">
        <button onClick={() => navigate(-1)}>←</button>
        <h3>My Cart</h3>
        <div></div>
      </div>

      {/* 📦 ITEMS */}
      <section className="cart__items">
        {cart.length === 0 && (
          <div>
            <p>Your cart is empty 🛒</p>
            <button onClick={() => navigate("/home")}>
              Go Shopping
            </button>
          </div>
        )}

        {cart.map(item => (
          <article
            key={item.id + item.size}
            className="cart__card"
          >
            <img src={item.img} alt={item.title} />

            <div className="info">
              <h4>{item.title}</h4>
              <p>Size: {item.size}</p>
              <span>${item.price}</span>

              <div className="qty">
                <button onClick={() => decrease(item.id, item.size)}>
                  -
                </button>

                <span>{item.qty}</span>

                <button onClick={() => increase(item.id, item.size)}>
                  +
                </button>
              </div>
            </div>

            <button
              className="remove"
              onClick={() => {
                if (window.confirm("Remove item?")) {
                  removeItem(item.id, item.size);
                }
              }}
            >
              ❌
            </button>
          </article>
        ))}
      </section>

      {/* 💰 TOTAL */}
      {cart.length > 0 && (
        <section className="cart__bottom">
          <div className="row">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

          {/* 🔥 МААНИЛҮҮ FIX */}
          <button
            className="checkout"
            onClick={() => {
              alert("Order placed ✅");
              setCart([]); // тазалайт
              navigate("/home"); // home га өтөт
            }}
          >
            Checkout
          </button>
        </section>
      )}

    </main>
  );
}

export default Cart;