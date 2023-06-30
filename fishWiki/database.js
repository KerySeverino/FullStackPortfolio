const { Sequelize } = require('sequelize');

const sq = new Sequelize('postgres://postgres:Rockdrakeblue09$@localhost:5432/fishWiki');

module.exports = sq;