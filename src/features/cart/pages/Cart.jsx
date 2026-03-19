import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      name: "Puma Sneakers",
      price: "$23.87",
      image: "/assets/images/fashion.jpg",
      qty: 1,
    },
  ];

  return (
    <div className="cart">
      <h2>Your Cart 🛒</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />

          <div className="info">
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <span>Qty: {item.qty}</span>
          </div>
        </div>
      ))}

      <button onClick={() => navigate("/checkout")}>
        Checkout
      </button>
    </div>
  );
}