const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('listings', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        price: {
            type: Sequelize.STRING,
        },
        picture: {
            type: Sequelize.STRING,
            defaultValue: 'https://babycentral.com.hk/image/cache/placeholder-250x250.png'
        },
        date: { 
        	type: Sequelize.DATE, 
        	defaultValue: Sequelize.NOW 
        }
    }
)