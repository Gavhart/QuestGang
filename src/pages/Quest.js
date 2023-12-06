import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Quest() {
    const [quests, setQuests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuests = async () => {
            try {
                const response = await axios.get('http://localhost:80/quests/request?userId=1701375677110566&userLevel=1&numQuests=3');
                console.log('Response:', response); // Debugging log
                setQuests(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching quests:', err); // Debugging log
                setError(err);
                setLoading(false);
            }
        };

        fetchQuests();
    }, []);

    if (loading) return <div>Loading quests...</div>;
    if (error) return <div>Error loading quests: {error.message}</div>;

    return (
        <div>
            <h2>Available Quests</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {quests.map((quest, index) => (
                    <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '20px' }}>
                        <Link to={`/quest/${quest.id}`}> {/* Make sure your routing is set up correctly */}
                            <h3>{quest.title}</h3>
                            <p>{quest.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quest;
