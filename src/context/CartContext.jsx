import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  // ✅ SAFE LOAD
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // ✅ SAVE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ ADD (size менен)
  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(
        item =>
          item.id === product.id &&
          item.size === product.size
      );

      if (exist) {
        return prev.map(item =>
          item.id === product.id &&
          item.size === product.size
            ? { ...item, qty: item.qty + product.qty }
            : item
        );
      }

      return [...prev, product];
    });
  };

  // ➕ INCREASE
  const increaseQty = (id, size) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.size === size
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ➖ DECREASE
  const decreaseQty = (id, size) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id && item.size === size
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  // ❌ REMOVE
  const removeFromCart = (id, size) => {
    setCart(prev =>
      prev.filter(
        item => !(item.id === id && item.size === size)
      )
    );
  };

  // 💰 TOTAL ITEMS
  const totalItems = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  // 💰 TOTAL PRICE
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;