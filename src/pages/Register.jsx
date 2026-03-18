import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <main className="login">

      {/* BACK */}
      <button className="back" onClick={() => navigate(-1)}>←</button>

      {/* IMAGE */}
      <div className="login__image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
          alt="register"
        />
      </div>

      {/* HEADER */}
      <section className="login__header">
        <h2>Create Account</h2>
        <p>Register to get started</p>
      </section>

      {/* FORM */}
      <section className="login__form">
        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />

        <div className="login__options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span className="forgot">Forgot?</span>
        </div>

        {/* SOCIAL */}
        <div className="social">
          <button></button>
          <button>G</button>
          <button>f</button>
        </div>

        {/* BUTTON */}
        <button onClick={() => navigate("/home")} className="btn">
          Sign Up
        </button>

        <p className="bottom-text">
          Already have account? <Link to="/login">Login</Link>
        </p>
      </section>

    </main>
  );
}

export default Register;