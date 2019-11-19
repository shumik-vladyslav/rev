const bcrypt = require('bcrypt');
const Joi = require('joi');
const Model = require('../models/model.model');

// const modelSchema = Joi.object({
//   fullname: Joi.string().required(),
//   email: Joi.string().email(),
//   mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/),
//   password: Joi.string().required(),
//   repeatPassword: Joi.string().required().valid(Joi.ref('password'))
// })


module.exports = {
  insert,
  getAll,
  getAllById,
  remove,
  updateById
}

async function insert(model) {
  // model = await Joi.validate(model, modelSchema, { abortEarly: false });
  return await new Model(model).save();
}

async function getAll() {
  return await Model.find()
}

async function getAllById(params) {
  return await Model.find({userId: params.id})
}

async function remove(params) {
  return await Model.remove({_id: params.id})
}

async function updateById(params) {
  return await Model.update({_id: params._id}, {$set: params})
}


