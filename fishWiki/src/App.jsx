import React, { useEffect, useState } from 'react';
import Fish from './models/Fish';
import FishList from './components/FishList';


function App() {
  const [fishData, setFishData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fishes = await Fish.findAll();
      setFishData(fishes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome to fishWiki</h1>
      <FishList fishData={fishData} />
    </div>
  );
}

export default App;