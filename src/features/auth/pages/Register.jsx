import { useNavigate } from "react-router-dom";
import "./Register.css";
import registerImg from "../../../assets/images/register.png";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="register">
      {/* IMAGE */}
      <img src={registerImg} className="top-image" alt="register" />

      <div className="form">
        <h2>Create Account ✨</h2>
        <p>Sign up to get started</p>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/home")}>
          Sign in
        </button>

        <p className="link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}