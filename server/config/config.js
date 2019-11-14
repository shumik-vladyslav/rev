const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  SERVER_PORT: Joi.number()
    .default(4040),
  MONGOOSE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('development'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false)
    }),
  JWT_SECRET: Joi.string().required()
    .description('JWT Secret required to sign'),
  MONGO_HOST: Joi.string().required()
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number()
    .default(27017)
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {

  // "ng": "ng",
  // "serve": "node server",
  // "start": "concurrently -c \"yellow.bold,green.bold\" -n \"SERVER,BUILD\" \"nodemon server\" \"ng build --watch\"",
  // "build": "ng build --prod",
  // "test": "ng test",
  // "lint": "ng lint",
  // "e2e": "ng e2e"
  //git push heroku master
  
//   NODE_ENV=production      
//   SERVER_PORT=4040                                                                                                 
//  JWT_SECRET=0a6b944d-d2fb-46fc-a85e-0295c986cd9g               
//   MONGO_HOST=mongodb://localhost:27017/cogintech                                                                          
//   MEAN_FRONTEND=angular 

// NODE_ENV=development
// SERVER_PORT=4040
// JWT_SECRET=0a6b944d-d2fb-46fc-a85e-0295c986cd9f
// MONGO_HOST=mongodb://morovar:aywcz1q8@ds031948.mlab.com:31948/heroku_37kv0jj3
// MEAN_FRONTEND=angular
env: envVars.NODE_ENV,
// port: envVars.SERVER_PORT,
  port: 8080,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  jwtSecret: envVars.JWT_SECRET,
  frontend: envVars.MEAN_FRONTEND || 'angular',
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT
  }
};

module.exports = config;
