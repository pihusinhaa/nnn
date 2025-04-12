import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    console.log("Logging in with:", { email, password });
    // Implement actual login logic here
  };

  return (
    <div className="container">
      <div className="logo-container">
        <h1 className="logo">Namra</h1>
        <p className="tagline">Your Safe Space, Always.</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Hello again!</h2>
          <p className="card-subtitle">Log in to your account</p>
        </div>

        <form className="form" onSubmit={handleLogin}>
          <input
            type="email"
            id="email"
            name="email"
            className="input-field"
            placeholder="lilyamber@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            className="input-field"
            placeholder="Ammn1234@"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="forgot-password">
            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="submit-btn">
            Log in
          </button>
        </form>

        <p className="signup-link">
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
