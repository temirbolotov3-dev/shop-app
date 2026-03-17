import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <main className="login">
      <section className="login__header">
        <h2>Welcome Back 👋</h2>
        <p>Login to continue</p>
      </section>

      <section className="login__form">
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />

        <div className="login__options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span>Forgot?</span>
        </div>

        <button onClick={() => navigate("/home")} className="btn">
          Login
        </button>

        <p>
          Don’t have account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;