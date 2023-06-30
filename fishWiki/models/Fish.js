const { Sequelize, DataTypes } = require('sequelize');
const  sq = require('../database');

   const Fish = sq.define("fish", {
     name: {
       type: DataTypes.STRING
     },
     temp: {
       type: DataTypes.STRING
     },
     ph: {
       type: DataTypes.STRING
     },
     ammonia: {
       type: DataTypes.FLOAT
     },
     nitrite: {
       type: DataTypes.FLOAT
     },
     nitrate: {
       type: DataTypes.STRING
     }
   });

   Fish.bulkCreate([
        {
            name: "Betta",
            temp: "72 - 82 F",
            ph: "6.5 - 7.5",
            ammonia: 0.0,
            nitrite: 0.0,
            nitrate: 20,
        },
        {
            name: "Black Skirt Tetra",
            temp: "78 - 82 F",
            ph: "6.0 - 7.5",
            ammonia: 0.0,
            nitrite: 0.0,
            nitrate: 40,
        },
        
        {
            name: "White Skirt Tetra",
            temp: "78 - 82 F",
            ph: "6.0 - 7.5",
            ammonia: 0.0,
            nitrite: 0.0,
            nitrate: 40,
        },
        {
            name: "Red Skirt Tetra",
            temp: "78 - 82 F",
            ph: "6.0 - 7.5",
            ammonia: 0.0,
            nitrite: 0.0,
            nitrate: 40,
        },
        {
            name: "Bristle Nose Pleco",
            temp: "60 - 80 F",
            ph: "6.5 - 7.5",
            ammonia: 0.0,
            nitrite: 0.0,
            nitrate: 40,
        },
        {
            name: "Clown Pleco",
            temp: "73 - 82 F",
            ph: "6.8 - 7.6",
            ammonia: 0.0,
            nitrite: 0.0,
            nitrate: 40,
        }
   ])

   .then(() => {
    console.log('Fish data inserted successfully');
  })
  .catch((error) => {
    console.error('Error inserting fish data:', error);
  });