const mongoose = require('mongoose');

const { Schema } = mongoose;

const perkSchema = require('./Perk');

const packageSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  perks: [perkSchema],

  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: true
  // }
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
