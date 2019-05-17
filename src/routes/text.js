const router = require('express').Router({ mergeParams: true });
const controllers = require('../controllers/text');

router.post('/', controllers.sendText);

module.exports = router;