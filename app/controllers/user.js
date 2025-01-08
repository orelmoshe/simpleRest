const { UserModel } = require('../models/user');
const { validationResult } = require('express-validator');

async function saveUser(req, res) {
  const validationErrors = validationResult(req);
  if (!validationErrors.length) {
    return res.status(400).send(validationErrors);
  }

  const { name, email } = req.body;
  try {
    const user = await new UserModel({ name, email });
    user.save();
    return res.json({ userId: user.id });
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function getUser(req, res) {
  const { userId } = req.body;
  try {
    const user = await UserModel.findById(userId).lean();
    return res.json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = {
  saveUser,
  getUser,
};
