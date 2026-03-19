import { useNavigate } from "react-router-dom";
import "./OrderDetails.css";

export default function OrderDetails() {
  const navigate = useNavigate();

  return (
    <div className="order-details">
      <h2>Order Details 📦</h2>

      {/* PRODUCT */}
      <div className="card">
        <img src="/assets/images/fashion.jpg" alt="product" />
        <div>
          <h4>Puma Sneakers</h4>
          <p>$23.87</p>
          <span>Qty: 1</span>
        </div>
      </div>

      {/* ADDRESS */}
      <div className="card">
        <h4>Delivery Address</h4>
        <p>Akira Kate</p>
        <p>New York, USA</p>
      </div>

      {/* PAYMENT */}
      <div className="card">
        <h4>Payment Method</h4>
        <p>💳 Visa **** 1234</p>
      </div>

      {/* BUTTONS */}
      <button onClick={() => navigate("/tracking/1")}>
        Track Order
      </button>

      <button className="secondary">
        Download Receipt
      </button>
    </div>
  );
}