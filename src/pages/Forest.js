import React, { useState, useEffect } from "react";
import axios from "axios";

function Forest() {
  const [form,setForm] = useState({
    userId: "",
    choice: ""
  })
  const [userStatus, setUserStatus] = useState("IN_COMBAT");
  const [userId, setUserId] = useState();
  const [battleMessage, setBattleMessage] = useState()
  const [choices, setChoices] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:80/character/status?username=testUser");
        const jsonStatus = response.data.status;
        const getUserId = response.data.userId
        setChoices(jsonStatus.choices)
        setUserStatus(jsonStatus.userStatus);
        setUserId(getUserId)
        console.log(response.data)
        // console.log("User Status:", jsonStatus);
        console.log("userId: ", userId);
        console.log(choices)
      } catch (error) {
        console.error("Error fetching user status:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once after the initial render

const GoLeft = async () =>{
  const gl_form = {
    userId: "1701375677110566",
    choice: "2"
  }

  await axios.put("http://localhost:80/quest/choice", gl_form)
  // console.log(GLMessage)
}

const GoRight = async () =>{
}

const RunAway = async() =>{
  const form ={
    userId: userId,
    action: "run"
  }
  axios.put("http://localhost:80/quest/action", form)
}
const Attack = async () =>{
  const form = {
    userId: userId,
    action: "attack"
  }
  const attackResponse = await axios.put("http://localhost:80/quest/action", form)
  setBattleMessage(attackResponse.data.message)
  // console.log(attackResponse.data.message)
}

  console.log("User Status: ", userStatus);

  return (
    <div>
      <h1>Forest</h1>
      {userStatus === "IN_QUEST" &&(
        <div className = "in_quest">
            <button className="go_left" onClick={GoLeft}>Go Left</button> 
            <button className="go_right" onClick={GoRight}>Go Right</button>
        </div> 
       )}
       {userStatus === "IN_COMBAT" &&(
        <div className="in_combat">
          <h1>{battleMessage}</h1>
           <button className="run_button" onClick={RunAway}>Run</button>
           <button className="attack_button" onClick={Attack}>Attack</button>
        </div>
       )}
    </div>
  );
}

export default Forest;
