import React, { useState, useEffect } from 'react';
import './HomePage.css';

function HomePage() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [playerStats, setPlayerStats] = useState(null);
  const [storeItems, setStoreItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated fetch for player stats and store items
    Promise.all([
      fetch('https://api.example.com/playerStats'),
      fetch('https://api.example.com/storeItems')
    ])
    .then(async ([statsResponse, itemsResponse]) => {
      const stats = await statsResponse.json();
      const items = await itemsResponse.json();
      setPlayerStats(stats);
      setStoreItems(items);
    })
    .catch(error => console.error('Error fetching data:', error))
    .finally(() => setIsLoading(false));
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.example.com/data?query=${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setData(null);
    }
  };

  const handleLogout = () => {
    // Implement logout logic (e.g., clear auth tokens, redirect to login page)
  };

  if (isLoading) {
    return <div className="home-page">Loading...</div>;
  }

  return (
    <div className="home-page">
      <h1>Welcome to Our React App!</h1>

      <div className="player-stats">
        {playerStats ? (
          <div>
            {/* Render player stats here */}
            <p>Player Stats: {JSON.stringify(playerStats)}</p>
          </div>
        ) : (
          <p>No player stats available</p>
        )}
      </div>

      <div className="store-section">
        {storeItems ? (
          storeItems.map(item => (
            <div key={item.id}>
              {/* Render store items here */}
              <p>{item.name}</p>
            </div>
          ))
        ) : (
          <p>No store items available</p>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Fetch Data</button>
      </form>
      {data && <div>{JSON.stringify(data)}</div>}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
