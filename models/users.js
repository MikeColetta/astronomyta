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
        isEmail: true,
      },
      password: {
        type: String,
        allowNull: false,
        minLength:[8, 'Password too short!'],
      },
});

const User = mongoose.model("User", userSchema);

module.exports = User;