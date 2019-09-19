const bcrypt = require('bcrypt');
const Joi = require('joi');
const Component = require('../models/component.model');

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
  updateById
}

async function insert(model) {
  return await new Component(model).save();
}

async function getAll() {
  return await Component.find()
}

async function getAllById(params) {
  return await Component.find({modelId: params.id})
}

async function updateById(params) {
  console.log(params)
  return await Component.update({_id: params._id}, {$set: params})
}
