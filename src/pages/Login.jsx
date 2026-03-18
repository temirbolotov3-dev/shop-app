import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <main className="login">

      {/* BACK */}
      <button className="back">←</button>

      {/* IMAGE */}
      <div className="login__image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
          alt="login"
        />
      </div>

      {/* HEADER */}
      <section className="login__header">
        <h2>Welcome Back 👋</h2>
        <p>Login to continue</p>
      </section>

      {/* FORM */}
      <section className="login__form">
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

        {/* LOGIN */}
        <button onClick={() => navigate("/home")} className="btn">
          Login
        </button>

        <p className="bottom-text">
          Don’t have account? <Link to="/register">Sign Up</Link>
        </p>
      </section>

    </main>
  );
}

export default Login;