import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function BottomNav() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="bottom-nav">

      <Link to="/home">🏠</Link>

      {/* CART */}
      <Link to="/cart" className="cart-icon">
        🛒
        {totalItems > 0 && (
          <span className="badge">{totalItems}</span>
        )}
      </Link>

      <Link to="/profile">👤</Link>

    </nav>
  );
}

export default BottomNav;