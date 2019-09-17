const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
  modelId: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  objectClass: {
    type: String,
    required: true
  },
  objectType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  parameters: [{
    id: String,
    name: String,
    description: String,
    value: Number,
    measurable: Number,
    changeable: Number,
    controlType: String,
    showName: Number,
    showOnDiagram: Number,
    featureLabelNone: String,
  }]
}, {
  versionKey: false
});

module.exports = mongoose.model('Component', ComponentSchema);