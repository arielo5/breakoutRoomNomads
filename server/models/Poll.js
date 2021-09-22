const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pollsSchema = new Schema({

})

const Polls = mongoose.model("Polls", pollsSchema);

module.exports = Polls;