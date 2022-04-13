const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const argon2 = require("argon2");

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    minlength: [2, "minimum 2 characters"],
    maxlength: [12, "maximum 12 characters"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    lowercase: true,
    unique: true,
    validate: [isEmail, "enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [8, "minimum 8 characters"],
    maxlength: [16, "maximum 16 characters"],
  },
  bookmark: [String],
  joinedAt: { type: Date, immutable: true, default: () => Date.now() },
});

UserSchema.pre("save", async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    return verfiyUser(user.password, password, user);
  }
  throw Error("incorrect email");
};

async function verfiyUser(password, checkPassword, user) {
  const auth = await argon2.verify(password, checkPassword);
  if (auth) {
    return user;
  }
  throw Error("incorrect password");
}

const User = mongoose.model("user", UserSchema);
module.exports = User;
