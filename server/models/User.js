const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
      },
    lastname: {
        type: String,
        required: true,
        trim: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
    password: {
        type: String,
        required: true,
        minlength: 5,
      },
})

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
