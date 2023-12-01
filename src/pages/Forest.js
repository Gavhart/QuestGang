import React, { useState, useEffect } from "react";
import axios from "axios";
import './forest.css';

function Forest() {
    const [quest, setQuest] = useState(null);

    useEffect(() => {
        const fetchQuestData = async () => {
            try {
                const response = await axios.put("http://localhost:80/character/status?username=taddecker");
                setQuest(response.data);
            } catch (error) {
                console.error("Error fetching quest data:", error);
            }
        };

        fetchQuestData();
    }, []);

    return (
        <div className="forest-container">
            <h1>Forest Quest</h1>
            {quest ? (
                <div className="quest-box">
                    <h2 className="quest-action">{quest.actions}</h2>
                    <p className="quest-status">{quest.userStatus}</p>
                    <p className="quest-reward">Reward: {quest.reward}</p>
                    <button className="quest-button">Complete Quest</button>
                </div>
            ) : (
                <p>Loading quest...</p>
            )}
        </div>
    );
}

export default Forest;
