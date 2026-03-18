import AppRouter from "./routes/AppRouter";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
  <div className="app">   {/* 🔥 МААНИЛҮҮ */}
    <AppRouter />
  </div>
</CartProvider>
  );
}

export default App;