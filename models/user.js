const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (password) {
        return password.length >= 8 && password.length <= 32;
      },
    },
  },
  current_balance: {
    type: Number,
    required: true,
    min: -Number.MAX_VALUE,
    max: Number.MAX_VALUE,
  },
  registration_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
