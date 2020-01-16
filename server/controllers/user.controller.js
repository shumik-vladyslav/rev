const bcrypt = require('bcrypt');
const Joi = require('joi');
const User = require('../models/user.model');

const userSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email(),
  mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/),
  password: Joi.string().required(),
  repeatPassword: Joi.string().required().valid(Joi.ref('password'))
})


module.exports = {
  insert,
  updateById,
  getAllUsers
}

async function insert(user) {
  user = await Joi.validate(user, userSchema, { abortEarly: false });
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;
  return await new User(user).save();
}

async function updateById(params) {
  return await User.update({_id: params._id}, {$set: params})
}

async function getAllUsers(params) {
  return await User.find()
}

// db.orders.aggregate([
//   {
//     $lookup:
//       {
//         from: "inventory",
//         localField: "item",
//         foreignField: "sku",
//         as: "inventory_docs"
//       }
//  }
// ])
