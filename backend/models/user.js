const mongoose = require("mongoose");
const Schema = mongoose.Schema; // class

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
  },
  { timestamps: true }
);

// Export Schema with the name User
module.exports = mongoose.model("users", User);