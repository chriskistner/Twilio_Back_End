const router = require('express').Router({ mergeParams: true });
const controllers = require('../controllers/token');

router.get('/', controllers.getToken);

module.exports = router;