import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (action === "Sign Up" && !name) {
      setError("Please enter your name");
      return false;
    }
    if (!email || !password) {
      setError("Email and password are required");
      return false;
    }
    // Add more validation as needed
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", { name, email, password });
      // Here you would typically make an API call for login or signup
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          {action === "Sign Up" && (
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="Password Icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          {action === "Login" && (
            <div className="forgot-password">
              Lost Password? <span>Click Here!</span>
            </div>
          )}
        </div>
        <div className="submit-container">
          <button
            type="submit"
            className={action === "Login" ? "submit gray" : "submit"}
          >
            Submit
          </button>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() =>
              setAction(action === "Sign Up" ? "Login" : "Sign Up")
            }
          >
            {action === "Sign Up" ? "Log In" : "Sign Up"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
