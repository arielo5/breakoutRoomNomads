const {Schema, model} = require("mongoose");

// const Schema = mongoose.Schema;

const pollSchema = new Schema({
    pollName: {
        type: String,
        required: true,
        trim: true,
    },
    pollOp: {
        type: Array,
        required: false,
    }
})

const Poll = model("Polls", pollSchema);

module.exports = Poll;
