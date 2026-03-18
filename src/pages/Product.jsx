import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [size, setSize] = useState(40);
  const [qty, setQty] = useState(1);

  // 🔄 FETCH
  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [id]);

  // ⏳ LOADING
  if (!product) {
    return (
      <main className="product">
        <div className="skeleton" style={{ height: 300 }}></div>
      </main>
    );
  }

  // 🔥 FLY EFFECT
  const handleAdd = () => {
    const img = document.querySelector(".product__image img");
    const cart = document.getElementById("cart-icon");

    if (img && cart) {
      const clone = img.cloneNode(true);

      const imgRect = img.getBoundingClientRect();
      const cartRect = cart.getBoundingClientRect();

      clone.style.position = "fixed";
      clone.style.top = imgRect.top + "px";
      clone.style.left = imgRect.left + "px";
      clone.style.width = imgRect.width + "px";
      clone.style.height = imgRect.height + "px";
      clone.style.transition = "all 0.7s ease";
      clone.style.zIndex = 999;
      clone.style.borderRadius = "12px";

      document.body.appendChild(clone);

      setTimeout(() => {
        clone.style.top = cartRect.top + "px";
        clone.style.left = cartRect.left + "px";
        clone.style.width = "20px";
        clone.style.height = "20px";
        clone.style.opacity = 0.5;
      }, 10);

      setTimeout(() => clone.remove(), 700);
    }

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.thumbnail,
      size: size,
      qty: qty,
    });

    alert("Added to cart ✅");
  };

  return (
    <main className="product">

      {/* 🔝 TOP BAR */}
      <div className="product__top">
        <button onClick={() => navigate(-1)}>←</button>
        <h3>Details</h3>
        <button>❤️</button>
      </div>

      {/* 🖼 IMAGE */}
      <div className="product__image">
        <motion.img
          src={product.thumbnail}
          alt={product.title}
          layoutId={`product-${product.id}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        />
      </div>

      {/* 📦 CONTENT */}
      <div className="product__content">

        <div className="row">
          <span>Description</span>
          <span className="price">${product.price}</span>
        </div>

        <h2>{product.title}</h2>

        <p className="desc">{product.description}</p>

        {/* SIZE */}
        <h4>Choose Size</h4>
        <div className="sizes">
          {[40, 41, 42, 43].map(s => (
            <button
              key={s}
              className={size === s ? "active" : ""}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        {/* 🔢 QUANTITY */}
        <h4>Quantity</h4>
        <div className="qty">
          <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        {/* BUTTON */}
        <motion.button
          className="checkout"
          onClick={handleAdd}
          whileTap={{ scale: 0.95 }}
        >
          Add to Cart
        </motion.button>

      </div>
    </main>
  );
}

export default Product;