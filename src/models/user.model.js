const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    points: { type: Number, default: 0 },

    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxlength: [20, 'First name cannot be more than 20 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      maxlength: [20, 'Last name cannot be more than 20 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      unique: true,
      lowercase: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        'Please enter a valid email',
      ],
    },

    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'non-binary', 'not-specified'],
    },

    secretOrKey: {
      type: String,
      unique: true,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['ACTIVE', 'INACTIVE', 'BLOCKED', 'PENDING'],
    },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
