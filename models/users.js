const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: String,
        allowNull: false,
      },
      email: {
        type: String,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: String,
        allowNull: false,
        validate: {
          minLen: [8],
        },
      },
});

const User = mongoose.model("User", userSchema);

module.exports = User;