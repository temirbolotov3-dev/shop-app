import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Onboarding from "../pages/Onboarding";
import NotFound from "../pages/NotFound";

// auth
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";

// home
import Home from "../features/home/pages/Home";

// product
import ProductDetails from "../features/product/pages/ProductDetails";

// cart
import Cart from "../features/cart/pages/Cart";

// checkout
import Checkout from "../features/checkout/pages/Checkout";

// order
import Orders from "../features/order/pages/Orders";
import OrderDetails from "../features/order/pages/OrderDetails";
import Tracking from "../features/order/pages/Tracking";

// wishlist
import Wishlist from "../features/wishlist/pages/Wishlist";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/tracking/:id" element={<Tracking />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}