import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Puma Sneakers",
      price: "$23.87",
      image: "/assets/images/fashion.jpg",
    },
    {
      id: 2,
      name: "Nike T-Shirt",
      price: "$45.87",
      image: "/assets/images/fashion.jpg",
    },
  ];

  return (
    <div className="home">
      <h2>Discover 👀</h2>

      <div className="products">
        {products.map((p) => (
          <div
            key={p.id}
            className="card"
            onClick={() => navigate(`/product/${p.id}`)}
          >
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}