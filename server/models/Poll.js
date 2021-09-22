const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pollsSchema = new Schema({
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

const Polls = mongoose.model("Polls", pollsSchema);

module.exports = Polls;
