const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const modelCtrl = require('../controllers/model.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
  .post(asyncHandler(insert));
router.route('/')
  .get(asyncHandler(getAll));
router.route('/list/:id')
.get(asyncHandler(getAllById));
router.route('/:id')
.delete(asyncHandler(remove));

async function insert(req, res) {
  let model = await modelCtrl.insert(req.body);
  res.json(model);
}

async function getAll(req, res) {
  let model = await modelCtrl.getAll(req.body);
  res.json(model);
}

async function getAllById(req, res) {
  let model = await modelCtrl.getAllById(req.params);
  res.json(model);
}

async function remove(req, res) {
  let model = await modelCtrl.remove(req.params);
  res.json(model);
}
