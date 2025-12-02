import mongoose from "mongoose";


// SCHEMA
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
//   timestamps tell us time when user login, delete and etc.
  { timestamps: true }
);

// MODEL
const User = mongoose.model('User', userSchema)

export default User