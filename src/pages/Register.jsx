import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <main>
      <section>
        <h2>Register</h2>
        <p>Create account</p>
      </section>

      <section>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="button" onClick={() => navigate("/home")}>
            Sign Up
          </button>
        </form>

        <p>
          Already have account? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;