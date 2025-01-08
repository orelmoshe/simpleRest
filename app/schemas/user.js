const { check } = require('express-validator');

const userSchema = [
  check('name').isString().isLength({ min: 5 }),
  check('emeil').isEmail(),
];

module.exports = {
  userSchema,
};
