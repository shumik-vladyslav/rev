const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
  modelId: {
    type: String,
  },
  modelIdName: {
    type: String,
  },
  userId: {
    type: String,
  },
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  objectClass: {
    type: String,
  },
  objectType: {
    type: String,
  },
  description: {
    type: String,
  },
  unit: {
    type: String,
  },
  picture: {
    type: String,
  },
  x: {
    type: Number,
  },
  y: {
    type: Number,
  },
  selected: [""],
  parameters: [{
    id: String,
    name: String,
    description: String,
    value: String,
    measurable: Number,
    changeable: Number,
    controlType: String,
    showName: Number,
    showOnDiagram: Number,
    sliderStep: Number,
    sliderMax: Number,
    sliderMin: Number,
    featureLabelNone: String,
  }]
}, {
  versionKey: false
});

module.exports = mongoose.model('Component', ComponentSchema);