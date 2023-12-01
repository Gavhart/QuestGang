import React, { useState, useEffect } from "react";
import axios from "axios";
import './store.css';

function Store() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:80/store");
        setItems(response.data.slice(0, 3)); // Get only the first three items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePurchase = async (itemId) => {
    try {
      // Replace with your actual purchase API endpoint
      await axios.post(`http://localhost:80/store/purchase/${itemId}`);
      alert("Purchase successful!");
    } catch (error) {
      console.error("Error processing purchase:", error);
      alert("Error processing purchase.");
    }
  };

  return (
    <div className="store-container">
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id} className="item">
            <h2>{item.name}</h2>
            <p>{item.description}</p> {/* Display item description */}
            <p>Price: {item.sellPriceInGold} Gold Pieces</p> {/* Display item price */}
            <button onClick={() => handlePurchase(item.id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
