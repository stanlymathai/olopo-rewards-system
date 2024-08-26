const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  points: { type: Number, default: 0 },
  // Add other fields as necessary
});

const User = mongoose.model('User', userSchema);
module.exports = User;
