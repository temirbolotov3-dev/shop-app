import { useNavigate } from "react-router-dom";
import "./Orders.css";

export default function Orders() {
  const navigate = useNavigate();

  const orders = [
    {
      id: 1,
      name: "Puma Sneakers",
      price: "$23.87",
      status: "Shipping",
      image: "/assets/images/fashion.jpg",
    },
  ];

  return (
    <div className="orders">
      <h2>My Orders 📦</h2>

      {orders.map((o) => (
        <div
          key={o.id}
          className="order-card"
          onClick={() => navigate(`/order/${o.id}`)}
        >
          <img src={o.image} alt={o.name} />

          <div className="info">
            <h4>{o.name}</h4>
            <p>{o.price}</p>
            <span className="status">{o.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}