const router = require('express').Router({ mergeParams: true });
const controllers = require('../controllers/voice');

router.post('/', controllers.recieveCall);
router.post('/make', controllers.makeCall);

module.exports = router;