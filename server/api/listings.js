const router = require('express').Router();
const {Listings, Sellers, Categories } = require('../db/models'); 


module.exports = router; 

router.get('/', function(req,res,next) {
	Listings.findAll()
		.then(listings => res.json(listings))
		.catch(next)
})

// router.get('/:categoryId/listings', function(req,res,next) {
// 	con
// })