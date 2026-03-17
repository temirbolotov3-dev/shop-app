import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default BottomNav;