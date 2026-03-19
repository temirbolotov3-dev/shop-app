import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginImg from "../../../assets/images/login.png"; // ✅ МААНИЛҮҮ

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login-card">
        {/* IMAGE */}
        <img
          src={loginImg} // ✅ ТУУРА
          alt="login"
          className="top-image"
        />

        {/* TITLE */}
        <h2>Welcome</h2>
        <p className="subtitle">Login to your account</p>

        {/* INPUTS */}
        <div className="input-group">
          <input type="text" placeholder="Mobile or Email" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Password" />
        </div>

        {/* OPTIONS */}
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>

          <span className="forgot">Forgot Password?</span>
        </div>

        {/* SOCIAL */}
        <div className="social">
          <div className="social-btn"></div>
          <div className="social-btn">G</div>
          <div className="social-btn">f</div>
        </div>

        {/* BUTTON */}
        <button onClick={() => navigate("/home")}>
          Login
        </button>

        {/* FOOTER */}
        <p className="footer">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}