const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
});

module.exports = mongoose.model('Model', ModelSchema);

