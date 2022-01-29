const mongoose = require('mongoose');

const { Schema } = mongoose;

const perkSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
    description: {
        type: String,
        required: true,
    }
});

const Perk = mongoose.model('Perk', perkSchema);

module.exports = Perk;