import "./Tracking.css";

export default function Tracking() {
  return (
    <div className="tracking">
      <h2>Tracking Details 🚚</h2>

      <div className="track-card">
        <h4>Puma Sneakers</h4>
        <p>#Tracking ID: 123456789</p>
      </div>

      <div className="steps">
        <div className="step active">
          <span>●</span>
          <p>Moving from warehouse</p>
        </div>

        <div className="step active">
          <span>●</span>
          <p>In transit</p>
        </div>

        <div className="step">
          <span>○</span>
          <p>Delivered</p>
        </div>
      </div>
    </div>
  );
}