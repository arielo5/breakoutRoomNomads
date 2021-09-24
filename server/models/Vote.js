const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const voteSchema = new Schema({
    user_id: {
        type: String,
    },
    pollName: {
        type: String,
        required: true,
    },
    voteArray: {
        type: Array,
        required: true
    }
})

const Votes = mongoose.model("Votes", voteSchema);

module.exports = Votes;