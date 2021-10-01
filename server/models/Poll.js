const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pollSchema = new Schema({
    pollName: {
        type: String,
        required: true,
        trim: true,
    },
    pollOp: {
        type: Array,
        required: true,
    }
})

const Poll = mongoose.model("Polls", pollSchema);

module.exports = Poll;
