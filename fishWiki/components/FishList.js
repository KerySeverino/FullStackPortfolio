import React, { useState, useEffect } from 'react';
import FishCard from './components/FishCard';

function FishList() {
  const [fishList, setFishList] = useState([]);

  useEffect(() => {
    // Fetches the fish data from database
  }, []);

  return (
    <div className="fish-list">
      {fishList.map((fish) => (
        <FishCard key={fish.id} fish={fish} />
      ))}
    </div>
  );
}

export default FishList;