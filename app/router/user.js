const router = require('express').Router();
const { saveUser, getUser } = require('../controllers/user');
const { userSchema } = require('../schemas/user');

router.post('/user', userSchema, saveUser);
router.get('/user', getUser);

module.exports = router;
