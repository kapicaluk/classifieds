const Listings = require('./Listings');
const Sellers = require('./Sellers');
const Categories = require('./Categories'); 

//associations: 

Sellers.hasMany(Listings); 

Listings.belongsTo(Sellers); 
Listings.belongsTo(Categories); 

module.exports = {
	Listings,
	Sellers,
	Categories,
}