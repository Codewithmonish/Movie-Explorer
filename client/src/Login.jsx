import React, { useState } from "react";
import "./Login.css";
import bg from "./assets/Login.jpg";   // Make sure src/assets/Login.jpg exists
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("movieUser"));

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      navigate("/signup");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      alert("Login successful!");
      navigate("/");   // redirect to Home page
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div
      className="netflix-login-page"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="overlay"></div>

      <div className="login-box">
        <h2>Sign In</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or mobile number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-red">
            Sign In
          </button>

          <div className="or-line">OR</div>

          <button type="button" className="btn-gray">
            Use a sign-in code
          </button>

          <a className="forgot">Forgot password?</a>

          <div className="remember-row">
            <input type="checkbox" /> Remember me
          </div>

          <p className="signup-text">
            New to Movie Explorer?{" "}
            <span onClick={() => navigate("/signup")}>
              Sign up now.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;




