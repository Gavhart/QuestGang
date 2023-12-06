import React, { useState, useEffect } from "react";
import axios from "axios";

function Forest() {
  const [userStatus, setUserStatus] = useState("NOT_IN_COMBAT");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:80/character/status?username=testUser");
        const jsonStatus = response.data.status;
        setUserStatus(jsonStatus.userStatus);
        console.log("User Status:", jsonStatus.userStatus);
      } catch (error) {
        console.error("Error fetching user status:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  console.log("User Status: ", userStatus);

  return (
    <div>
      <h1>Forest</h1>
      {userStatus === "IN_QUEST" &&(
        <div className = "in_quest">
            <button>Go Left</button>
            <button>Go Right</button>
        </div> 
       )}
       {userStatus === "IN_COMBAT" &&(
        <div className="in_combat">
           <button>Run</button>
           <button>Attack</button>
        </div>
       )}
    </div>
  );
}

export default Forest;
