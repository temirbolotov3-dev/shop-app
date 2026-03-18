import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Onboarding() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/home");
    }
  }, [navigate]); // 🔥 МААНИЛҮҮ FIX

  return (
    <main className="onboarding">

      <img
        src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd53"
        alt="fashion"
        className="onboarding__img"
      />

      <div className="onboarding__content">
        <h1>Find Your Best Style</h1>
        <p>
          Join and discover the best style according to your passion
        </p>

        <button onClick={() => navigate("/login")}>
          Get Started
        </button>
      </div>

    </main>
  );
}

export default Onboarding;