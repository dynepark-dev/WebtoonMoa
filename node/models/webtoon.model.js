const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WebtoonSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
  platform: { type: String, required: true },
  genre: [String],
  days: [String],
  author: [String],
  synopsis: String,
  age: String,
  first_episode_url: String,
  publisher: String,
  category: String,
  updated: { type: Date, default: () => Date.now() },
  likes: { type: Number, default: 0 },
  hates: { type: Number, default: 0 },
});

WebtoonSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Webtoon = mongoose.model("webtoon", WebtoonSchema);
module.exports = Webtoon;
