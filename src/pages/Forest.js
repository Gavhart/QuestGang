import React, { useState, useEffect } from "react";
import axios from "axios";
import './forest.css';

function Forest() {
    const [quest, setQuest] = useState(null);

    useEffect(() => {
        const fetchQuestData = async () => {
            try {
                const response = await axios.get("http://localhost:80/quest/choice");
                setQuest(response.data);
            } catch (error) {
                console.error("Error fetching quest data:", error);
            }
        };

        fetchQuestData();
    }, []);

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
                </div>
            ) : (
                <p>Loading the battle...</p>
            )}
        </div>
    );
}

export default Forest;
