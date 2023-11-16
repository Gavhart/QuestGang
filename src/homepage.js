//Homepage where you go after you have logged in, should show API requests and store items as 
//well as player stats and a logout button, should be pleasing to the eye and have a nice background

import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);

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

  return (
    <div className="home-page">
      <h1>Welcome to Our React App!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Fetch Data</button>
      </form>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default HomePage;

