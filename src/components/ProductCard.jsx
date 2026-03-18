import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ id, title, price, img }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <motion.article
      className="card"
      whileHover={{ scale: 1.03 }}
    >
      {/* IMAGE */}
      <motion.img
        src={img}
        alt={title}
        layoutId={`product-${id}`}   // 🔥 МАГИЯ
      />

      <h3>{title.slice(0, 20)}...</h3>
      <p>${price}</p>

      <button
        className="btn"
        onClick={() => addToCart({ id, title, price, img })}
      >
        Add to Cart
      </button>

      {/* CLICK TO PAGE */}
      <div onClick={() => navigate(`/product/${id}`)} />
    </motion.article>
  );
}

export default ProductCard;