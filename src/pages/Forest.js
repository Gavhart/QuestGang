import React, { useState, useEffect } from "react";
import axios from "axios";
import './forest.css';

        fetchQuestData();
    }, []);

function Forest () {
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
    }, []); 
    

    // console.log("Temp Status: ", tempStatus)
    // const [userStatus, setUserStatus] = useState("NOT_IN_COMBAT")
    
    
    return (
        <div className="forest-container">
            <h1>Battle Grounds</h1>
            {quest ? (
                <div className="quest-box">
                    <h2>{quest.name}</h2>
                    <p className="quest-description">{quest.description}</p>
                    <p className="quest-enemy">Enemy: {quest.enemy}</p>
                    <p className="quest-reward">Reward: {quest.reward}</p>
                    <button className="quest-button">Complete Quest</button>
                    {/* {userStatus === "NOT_IN_QUEST" && (
            <p>User is not in a quest.</p>
            )} */}
            <button>Run</button>
            <button>Attack</button>
        </div>
            ) : (
                <p>Loading the battle...</p>
            )}
        </div>
    );
}

<<<<<<< HEAD

export default Forest;
=======
export default Forest;
>>>>>>> 51dfb07c883c7caa7780afeb87561a0f15654ea5
