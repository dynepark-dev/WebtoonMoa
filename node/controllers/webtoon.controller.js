const Webtoon = require("../models/webtoon.model");

const getWebtoons = async (req, res) => {
  const { category, platform, genre } = req.query;
  const page = parseInt(req.query.page);
  const limit = 20;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  const query = {};

  function setMeta() {
    if (endIndex < total) return { nextPage: page + 1, limit, total };
    if (startIndex > 0) return { previousPage: page - 1, limit, total };
    return { limit, total };
  }

  query.category = category;
  genre === "전체"
    ? (query.genre = { $exists: true })
    : (query.genre = { $all: genre.split(",") });
  platform === "전체"
    ? (query.platform = { $exists: true })
    : (query.platform = { $in: platform.split(",") });

  const total = await Webtoon.countDocuments(query).exec();
  results.meta = setMeta();
  try {
    results.webtoons = await Webtoon.find(query)
      .limit(limit)
      .skip(startIndex)
      .exec();
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const searchWebtoon = async (req, res) => {
  const search = req.params.name;
  const regex = new RegExp(search, "i");
  const query = {
    $or: [{ title: regex }, { author: regex }],
  };
  try {
    const webtoon = await Webtoon.find(query);
    res.status(200).json(webtoon);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getBookmarked = async (req, res) => {
  const title = req.query.title.split(",");
  const query = { title: { $in: title } };
  try {
    const webtoons = await Webtoon.find(query);
    res.status(200).json(webtoons);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getWebtoonDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const webtoon = await Webtoon.findOne({ _id: id });
    res.status(200).json(webtoon);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getWebtoonsUpdated = async (req, res) => {
  try {
    results = await Webtoon.find({}).sort({ updated: -1 }).limit(limit).exec();
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getWebtoonsRecommended = async (req, res) => {
  const genre = req.query.genre.split(",");
  const query = { genre: { $all: genre } };
  try {
    const count = await Webtoon.countDocuments(query);
    const random = Math.floor(Math.random() * count);
    const results = await Webtoon.find(query).skip(random).limit(limit);
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const postWebtoon = async (req, res) => {
  try {
    const webtoon = await Webtoon.create(req.body);
    res.status(201).json(webtoon);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getWebtoons,
  searchWebtoon,
  getBookmarked,
  getWebtoonDetail,
  getWebtoonsUpdated,
  getWebtoonsRecommended,
  postWebtoon,
};
