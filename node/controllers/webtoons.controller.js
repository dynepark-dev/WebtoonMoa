const Webtoon = require("../models/webtoon.model");
const sample = require("./sample.json");

const getWebtoons = async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = 20;
  const category = req.query.category;
  // const startIndex = (page - 1) * limit;
  // const endIndex = page * limit;
  // const results = {};

  // const total = await Webtoon.countDocuments({ category }).exec();
  // results.meta = setMeta();

  // function setMeta() {
  //   if (endIndex < total) return { nextPage: page + 1, limit, total };
  //   if (startIndex > 0) return { previousPage: page - 1, limit, total };
  //   return { limit, total };
  // }

  try {
    // results.data = await Webtoon.find({ category })
    //   .limit(limit)
    //   .skip(startIndex)
    //   .exec();
    results = sample.webtoons.slice(1, 20);
    console.log("webtoons GET");
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ message: error.message });
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
  const genre = req.query.genre;
  try {
    const count = await Webtoon.countDocuments({ genre });
    const random = Math.floor(Math.random() * count);
    const results = await Webtoon.find({ genre }).skip(random).limit(limit);
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getWebtoonsFiltered = async (req, res) => {
  const page = parseInt(req.query.page);
  let { category, platform, days, genre, age, consonant } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  const query = { ...{ category, platform, days, genre, age, consonant } };
  Object.keys(query).forEach(
    (key) => query[key] === "전체" && delete query[key]
  );

  const total = await Webtoon.countDocuments(query);
  results.meta = setMeta();

  function setMeta() {
    if (endIndex < total) return { nextPage: page + 1, limit, total };
    if (startIndex > 0) return { previousPage: page - 1, limit, total };
    return { limit, total };
  }

  try {
    results.data = await Webtoon.find(query)
      .limit(limit)
      .skip(startIndex)
      .exec();
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

const getSingleWebtoon = async (req, res) => {
  const id = req.params.id;
  try {
    const webtoon = await Webtoon.findOne({ _id: id });
    res.status(200).json(webtoon);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const searchWebtoon = async (req, res) => {
  const search_text = req.params.name;
  const regex = new RegExp(search_text, "i");
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
  const ids = req.query.ids.split(",");
  try {
    const webtoons = await Webtoon.find({ _id: { $in: ids } });
    res.status(200).json(webtoons);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
module.exports = {
  getWebtoons,
  getWebtoonsUpdated,
  getWebtoonsRecommended,
  getWebtoonsFiltered,
  postWebtoon,
  getSingleWebtoon,
  searchWebtoon,
  getBookmarked,
};
