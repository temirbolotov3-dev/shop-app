import { useNavigate } from "react-router-dom";

function Onboarding() {
  const navigate = useNavigate();

  return (
    <main className="onboarding">
      <section className="onboarding__image">
        <img
          src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800"
          alt="fashion"
        />
      </section>

      <section className="onboarding__content">
        <h1>Find Your Best Style</h1>
        <p>
          Join and discover the best style according to your passion
        </p>

        <button onClick={() => navigate("/login")} className="btn">
          Get Started
        </button>
      </section>
    </main>
  );
}

export default Onboarding;