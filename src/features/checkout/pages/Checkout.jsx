import { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <div className="checkout">
      <h2>Checkout ({step}/3)</h2>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="card">
          <h3>Select Address</h3>
          <p>Akira Kate</p>
          <p>New York, USA</p>

          <button onClick={() => setStep(2)}>
            Next → Payment
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="card">
          <h3>Payment Method</h3>
          <p>💳 Visa **** 1234</p>

          <button onClick={() => setStep(3)}>
            Place Order
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="card success">
          <h3>Order Successful 🎉</h3>
          <p>Your order has been placed</p>

          <button onClick={() => window.location.href = "/orders"}>
          Go to Orders
           </button>
        </div>
      )}
    </div>
  );
}