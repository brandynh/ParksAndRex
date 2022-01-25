const { Schema } = require('mongoose');

const perkSchema = new Schema({
    description: {
        type: String,
        required: true,
    }
});

module.exports = perkSchema;