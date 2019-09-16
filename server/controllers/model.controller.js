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
  getAll
}

async function insert(model) {
  // model = await Joi.validate(model, modelSchema, { abortEarly: false });
  return await new Model(model).save();
}


async function getAll(model) {
  // model = await Joi.validate(model, modelSchema, { abortEarly: false });
  return await Model.find()
}
