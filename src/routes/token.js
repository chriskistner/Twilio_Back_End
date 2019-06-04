const router = require('express').Router({ mergeParams: true });
const controllers = require('../controllers/token');

router.get('/', controllers.recieveCall);

module.exports = router;