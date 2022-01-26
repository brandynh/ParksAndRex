const mongoose = require('mongoose');

const { Schema } = mongoose;

const perkSchema = new Schema({
    description: {
        type: String,
        required: true,
    }
});

const Perk = mongoose.model('Perk', perkSchema);

module.exports = Perk;