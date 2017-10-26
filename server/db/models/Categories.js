const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('categories', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
})