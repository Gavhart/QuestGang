import React, { useState, useEffect } from "react";
import axios from "axios";
import './quest.css';

function Quest() {
        const [quests, setQuests] = useState([]);
        const [error, setError] = useState(null);
        const [userId, setUserId] = useState("1701375677110566");
    
        useEffect(() => {
            const fetchQuests = async () => {
                try {
                    const response = await axios.put("http://localhost:80/quests/request?userId="+userId);
                    if (response?.data) {
                        // Randomly select three quests
                        console.log (response.data);
                        setQuests(response.data.quests);
                    } else {
                        setQuests([]);
                    }
                } catch (err) {
                    console.error("Error fetching quests:", err);
                    setError(err);
                }
            };
    
            fetchQuests();
        }, []);
    
        if (error) return <div>Error loading quests: {error.message}</div>;
    
        return (
            <div className="quests-container">
                <h2>Available Quests</h2>
                <div className="quests-list">
                    {quests.map((quest, index) => (
                        <div key={index} className="quest">
                            <h3>{quest.name}</h3>
                            <p>{quest.difficulty}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    
    export default Quest;
    
