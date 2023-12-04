import React, { useState, useEffect } from "react";
import axios from "axios";
import './store.css';

function Store() {
  const [items, setItems] = useState([]);
  const [userGold, setUserGold] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsResponse = await axios.get("http://localhost:80/store");
        if (itemsResponse?.data)
            setItems(itemsResponse.data.slice(0, 3)); // Get only the first three items
        else
            setItems([]);

        // Fetch user gold
        // const username = localStorage.getItem("username")
        const username = "testUser"
        const statusResponse = await axios.get(`http://localhost:80/character/status?username=${username}`);
        if (statusResponse?.data?.gold)
            setUserGold(statusResponse.data.gold) 
        else
            setUserGold(0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePurchase = async (itemId) => {
    const selectedItem = items.find(item => item.id === itemId);
    if (!selectedItem) {
      alert("Item not found.");
      return;
    }

    if (userGold < selectedItem.sellPriceInGold) {
      alert("Not enough gold to purchase this item.");
      return;
    }

    try {
      // Proceed with the purchase
      await axios.post(`http://localhost:80/store/purchase/${itemId}`);
      // Subtract the item's cost from the user's gold
      const updatedGold = userGold - selectedItem.sellPriceInGold;
      setUserGold(updatedGold);
      // Optionally, update the user's gold on the server
      await axios.post(`http://localhost:80/user/update-gold`, { gold: updatedGold });

      alert("Purchase successful!");
    } catch (error) {
      console.error("Error processing purchase:", error);
      alert("Error processing purchase.");
    }
  };

  return (
    <div className="store-container">
      <div>User's Gold: {userGold}</div>
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
