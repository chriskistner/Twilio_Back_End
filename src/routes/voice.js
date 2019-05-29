const router = require('express').Router({ mergeParams: true });
const controllers = require('../controllers/voice');

router.post('/', controllers.makeCall);

module.exports = router;