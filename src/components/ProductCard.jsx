import { useNavigate } from "react-router-dom";

function ProductCard({ title, price, img }) {
  const navigate = useNavigate();

  return (
    <article className="card" onClick={() => navigate("/product")}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </article>
  );
}

export default ProductCard;