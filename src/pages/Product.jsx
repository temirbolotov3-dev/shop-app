import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = {
    id: 1,
    title: "Nike Air Max",
    price: 120,
    img: "https://via.placeholder.com/300",
  };

  const handleAdd = () => {
    addToCart({
      ...product,
      qty: 1, // 🔥 МААНИЛҮҮ
    });

    navigate("/cart");
  };

  return (
    <main className="product">

      {/* BACK */}
      <button className="back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* IMAGE */}
      <section className="product__image">
        <img src={product.img} alt={product.title} />
      </section>

      {/* INFO */}
      <section className="product__info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>

        <p className="desc">
          Comfortable and stylish sneakers perfect for everyday wear.
        </p>

        <button className="btn" onClick={handleAdd}>
          Add to Cart
        </button>
      </section>

    </main>
  );
}

export default Product;