import React, { useState } from "react";
import axios from "axios";
import "./LoginSignup.css";
import { useNavigate } from 'react-router-dom'
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = props => {
  const navigate = useNavigate();

  const [action, setAction] = useState("Sign Up");
  const [loggedIn, setLoggedIn] = useState(false);
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: ""
  });



const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm =async e => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
    try{
      const response = await axios.post("http://localhost:80/character/login", form)
      console.log(response)

      const token = response.data.token
      localStorage.setItem('token', token)
      setLoggedIn(true)
      navigate('/Store')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={onSubmitForm}>
        <div className="inputs">
          {action === "Sign Up" && (
            <div className="input">
              {/* <img src={user_icon} alt="User Icon" /> */}
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={onUpdateField}
              />
            </div>
          )}
          <div className="input">
            {/* <img src={email_icon} alt="Email Icon" /> */}
            <input
              type="text"
              placeholder="Character Name"
              name="username"
              value={form.username}
              onChange={onUpdateField}
            />
          </div>
          <div className="input">
            {/* <img src={password_icon} alt="Password Icon" />d */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={onUpdateField}
            />
          </div>
          {/* {error && <div className="error-message">{error}</div>} */}
          {action === "Login" && (
            <div className="forgot-password">
              {/* Lost Password? <span>Click Here!</span> */}
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


  // const validateForm = () => {
  //   if (action === "Sign Up" && !name) {
  //     setError("Please enter your name");
  //     return false;
  //   }
  //   if (!email || !password) {
  //     setError("Email and password are required");
  //     return false;
  //   }
  //   // Add more validation as needed
  //   setError("");
  //   return true;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log("Form Submitted:", { name, email, password });
  //     // Here you would typically make an API call for login or signup
  //   }
  // };