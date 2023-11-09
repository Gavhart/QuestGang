import React from "react";
import { useState } from "react";
import Classes from "../Classes/Classes";  
import { getAllClasses } from "../../Classes/classes.js"  

const LoginSignup = () => {

    const[action,setAction] = useState("Sign Up");

    return (
        <div className="container">
            <Button onPress="getAllClasses">
                GET CLASSES
            </Button>
        </div>
    )
}

export default LoginSignup;