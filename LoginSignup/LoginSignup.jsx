import React from "react";
import "./LoginSignup.css";
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useState } from "react";

const LoginSignup = () => {
    //username and password variable that will be used to check in the database
    const[form, setForm] = useState({
        username:"",
        password:""

    })

    //function to update the username and password
    const onUpdateField = e => {
        const nextFormState = {
          ...form,
          [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
      }

    //function to submit the form
    const onSubmitForm = e => {
        e.preventDefault();
        alert(JSON.stringify(form, null, 2));
        console.log(JSON.stringify(form, null, 2));
      };

    const[action,setAction] = useState("Sign Up");

    return (
        <form className= "form" onSubmit={onSubmitForm} action = "POST">
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action==="Login"?<div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Userame" />                    
                    </div> : 
                        <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Userame" />
                        </div>}
                    <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
                {action==="Sign Up"?<div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                <div className="submit-container">
                    <div className={action==="Login?"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign Up?"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Log In</div>
                </div>
            </div>
            </div>
        </form>
    )
}

export default LoginSignup;