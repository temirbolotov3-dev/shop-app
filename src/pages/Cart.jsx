import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  // ➕ quantity көбөйтүү
  const increase = (index) => {
    const updated = [...cart];
    updated[index].qty += 1;
    setCart(updated);
  };

  // ➖ quantity азайтуу
  const decrease = (index) => {
    const updated = [...cart];

    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
    } else {
      updated.splice(index, 1); // 0 болсо өчөт
    }

    setCart(updated);
  };

  // ❌ remove
  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  // 💰 total эсептөө
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <main className="cart">
      <header>
        <h2>My Cart</h2>
      </header>

      <section className="cart__items">
        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item, index) => (
          <article key={index} className="cart__item">
            <img src={item.img} alt={item.title} width="80" />

            <div>
              <h4>{item.title}</h4>
              <p>${item.price}</p>

              <div className="qty">
                <button onClick={() => decrease(index)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increase(index)}>+</button>
              </div>

              <button
                className="remove"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="cart__total">
        <h3>Total: ${total}</h3>
        <button className="btn">Checkout</button>
      </section>
    </main>
  );
}

export default Cart;