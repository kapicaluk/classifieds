const router = require('express').Router();
const { Sellers } = require('../db/models');

module.exports = router;

router.get('/', function(req, res, next) {
  Sellers.findAll()
    .then(sellers => res.json(sellers))
    .catch(next);
});
