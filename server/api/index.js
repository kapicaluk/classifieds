const router = require('express').Router();
module.exports = router;

router.use('/listings', require('./listings'));
router.use('/sellers', require('./sellers'));
// router.use('/categories', require('./categories'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});
