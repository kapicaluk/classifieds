const Sequelize = require('sequelize');
const db = require('../db');

const images = [
  'https://randomuser.me/api/portraits/lego/8.jpg',
  'https://randomuser.me/api/portraits/lego/6.jpg',
  'https://randomuser.me/api/portraits/lego/3.jpg',
  'https://randomuser.me/api/portraits/lego/4.jpg',
  'https://randomuser.me/api/portraits/lego/1.jpg'
];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

module.exports = db.define('author', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: function () {
      return getRandomImage();
    }
  }
});