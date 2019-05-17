const router = require('express').Router({ mergeParams: true });
const controllers = require('../controllers/text');

router.post('/', controllers.recieveText);
router.post('/send', controllers.sendText);

module.exports = router;