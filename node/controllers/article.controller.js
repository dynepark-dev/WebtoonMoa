const Article = require("../models/article.model");

const url = process.env.URL;

const getArticles = async (req, res) => {
  const page = Math.min(parseInt(req.query.page), 1);
  const limit = parseInt(req.query.limit);
  const category = req.query.category;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};

  // setMeta
  async function setMeta() {
    const total = await Article.countDocuments({ category }).exec();
    if (endIndex < total) {
      return (results.meta = { nextPage: page + 1, limit, total });
    }
    if (startIndex > 0) {
      return (results.meta = { previousPage: page - 1, limit, total });
    }
    results.meta = { limit, total };
  }

  async function setMetaForNull() {
    const total = await Article.countDocuments().exec();
    if (endIndex < total) {
      return (results.meta = { nextPage: page + 1, limit, total });
    }
    if (startIndex > 0) {
      return (results.meta = { previousPage: page - 1, limit, total });
    }
    results.meta = { limit, total };
  }

  // find Articles
  async function findArticles() {
    results.data = await Article.find({ category })
      .limit(limit)
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .exec();
    res.setHeader("Content-Security-Policy", `script-src ${url}`);
    res.status(200).json(results);
  }

  async function findArticlesForNull() {
    results.data = await Article.find()
      .limit(limit)
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .exec();
    res.setHeader("Content-Security-Policy", `script-src ${url}`);
    res.status(200).json(results);
  }

  try {
    if (category === "null") {
      findArticlesForNull();
      setMetaForNull();
    } else {
      findArticles();
      setMeta();
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getSingleArticle = async (req, res) => {
  const articleID = req.params.id;
  try {
    await Article.increaseView({ _id: articleID });
    const article = await Article.find({ _id: articleID });
    res.setHeader("Content-Security-Policy", `script-src ${url}`);
    log.info(`GET / 200 get single article`);
    res.status(200).json(article);
  } catch (error) {
    log.error(`GET / 409 get article. ${error.message}`);
    res.status(409).json({ message: error.message });
  }
};

const postArticle = async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  if (title === "" || content === "") {
    res.status(411).json({ message: "need content" });
  } else {
    try {
      const article = await Article.create(req.body);
      res.status(201).json(article);
    } catch (article) {
      res.status(409).json({ message: error.message });
    }
  }
};

const deleteArticle = async (req, res) => {
  const id = req.params.id;
  try {
    await Article.findOneAndDelete({ _id: id });
    res.status(204).send("article deleted!");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const likeArticle = async (req, res) => {
  const _id = req.body.article_id;
  const user_id = res.locals.user._id;
  const update = { $push: { thumbUp: user_id } };
  const options = { new: true };
  if (res.locals.user === null) {
    log.info(`PATCH / 403 like article. articleID: ${id}`);
    res.status(403).json({ message: error.message });
  } else {
    try {
      const result = await Article.findOneAndUpdate({ _id }, update, options);
      res.status(201).json(result);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }
};

module.exports = {
  getArticles,
  getSingleArticle,
  postArticle,
  deleteArticle,
  likeArticle,
};
