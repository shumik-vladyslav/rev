const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const userCtrl = require('../controllers/user.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
  .post(asyncHandler(insert));
router.route('/')
  .put(asyncHandler(updateById));
router.route('/getallusers')
  .get(asyncHandler(getAllUsers));
  

async function insert(req, res) {
  let user = await userCtrl.insert(req.body);
  res.json(user);
}

async function updateById(req, res) {
  let model = await userCtrl.updateById(req.body);
  res.json(model);
}

async function getAllUsers(req, res) {
  let model = await userCtrl.getAllUsers(req.body);
  res.json(model);
}

