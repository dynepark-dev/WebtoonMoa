const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewWebtoonSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  platform: { type: String, required: true },
  episodeTitle: String,
  episodeLink: String,
  updatedAt: { type: Date, default: () => Date.now() },
});

// newWebtoonSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

const NewWebtoon = mongoose.model("newWebtoon", NewWebtoonSchema);
module.exports = NewWebtoon;
