const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: mongoose.SchemaTypes.ObjectId, required: true },
  authorName: { type: String, required: true },
  authorEmail: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
  viewCount: { type: Number, default: 0 },
  thumbUp: [String],
  thumbDown: [String],
});

ArticleSchema.statics.increaseView = async function (_id) {
  try {
    await this.findOneAndUpdate({ _id }, { $inc: { viewCount: 1 } });
  } catch {
    throw Error("not found");
  }
};

const Article = mongoose.model("article", ArticleSchema);
module.exports = Article;
