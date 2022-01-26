const mongoose = require('mongoose');

const { Schema } = mongoose;

const Perk = require('./Perk');

const packageSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  perks: [Perk.schema],
//   console warnings thrown here for img hrefs and alts
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
