import React, { useState } from "react";
import "./Signup.css";
import bg from "./assets/Login.jpg";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = { email, password };
    localStorage.setItem("movieUser", JSON.stringify(newUser));

    alert("Signup successful! Please login.");
    navigate("/login"); // redirect to Login page
  };

  return (
    <div
      className="netflix-signup-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      <div className="signup-box">
        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-red">
            Sign Up
          </button>

          <p className="login-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;


