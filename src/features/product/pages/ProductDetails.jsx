import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="product">
      <img
        src="/assets/images/fashion.jpg"
        alt="product"
        className="image"
      />

      <div className="content">
        <h2>Puma Sneakers</h2>
        <p className="price">$23.87</p>

        <p className="desc">
          Comfortable and stylish sneakers for everyday use.
        </p>

        <button onClick={() => navigate("/cart")}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}