const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const componentCtrl = require('../controllers/component.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
  .post(asyncHandler(insert));
router.route('/')
  .get(asyncHandler(getAll));
router.route('/list/:id')
  .get(asyncHandler(getAllById));
router.route('/')
  .put(asyncHandler(updateById));
router.route('/:id')
  .delete(asyncHandler(removeById));
  

async function insert(req, res) {
  let model = await componentCtrl.insert(req.body);
  res.json(model);
}

async function getAll(req, res) {
  let model = await componentCtrl.getAll(req.body);
  res.json(model);
}

async function getAllById(req, res) {
  let model = await componentCtrl.getAllById(req.params);
  res.json(model);
}

async function updateById(req, res) {
  let model = await componentCtrl.updateById(req.body);
  res.json(model);
}

async function removeById(req, res) {
  let model = await componentCtrl.removeById(req.params);
  res.json(model);
}