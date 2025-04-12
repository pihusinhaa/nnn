import React from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <h1 className="logo">Namra</h1>
        <p className="tagline">Your Safe Space, Always.</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Forgot your password?</h2>
          <p className="card-subtitle">
            Please enter your email to reset your password.
          </p>
        </div>

        <form className="form">
          <input
            type="email"
            className="input-field"
            placeholder="Enter your email"
          />

          <button type="submit" className="submit-btn">
            Send Reset Link
          </button>
        </form>

        <Link to="/login">
          <span>Log in</span>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
