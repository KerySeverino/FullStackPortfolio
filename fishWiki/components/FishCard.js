import React from 'react';

function FishCard({ fish }) {
  return (
    <div className="fish-card">
      <h2>{fish.name}</h2>
      <p>Temperature: {fish.temp}</p>
      <p>pH: {fish.ph}</p>
      <p>Ammonia: {fish.ammonia}</p>
      <p>Nitrite: {fish.nitrite}</p>
      <p>Nitrate: {fish.nitrate}</p>
    </div>
  );
}

export default FishCard;