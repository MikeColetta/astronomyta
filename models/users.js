const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: String,

      },
      email: {
        type: String,

      },
      password: {
        type: String,
      },
});

const User = mongoose.model("User", userSchema);

module.exports = User;