const router = require('express').Router();
const {Listings} = require('../db/models'); 


module.exports = router; 

router.get('/', function(req,res,next) {
	Listings.findAll()
		.then(listings => res.json(listings))
		.catch(next)
})