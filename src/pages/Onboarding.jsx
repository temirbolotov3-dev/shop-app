import { useNavigate } from "react-router-dom";
import onboardingImg from "../assets/images/onboarding.png";
import "./Onboarding.css";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="onboarding">
      
      {/* IMAGE */}
      <img src={onboardingImg} alt="onboarding" className="top-image" />

      {/* TEXT */}
      <div className="text-card">
        <h2>Find Your Best Style</h2>
        <p>
          Join and discover the best style according to your passion
        </p>
      </div>

      {/* BUTTON */}
      <button 
        className="get-started"
        onClick={() => navigate("/login")}
      >
        Get Started
      </button>

    </div>
  );
}