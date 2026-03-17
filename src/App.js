import AppRouter from "./routes/AppRouter";
import "./styles/global.css";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </div>
  );
}

export default App;