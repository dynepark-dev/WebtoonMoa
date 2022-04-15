const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  platform: { type: String, required: true },
  episodeTitle: String,
  episodeLink: String,

  updated: { type: Date, default: () => Date.now() },
});

NewSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const New = mongoose.model("new", NewSchema);
module.exports = New;
