const NewWebtoon = require("../models/newWebtoon.model");

const getNewWebtoons = async (req, res) => {
  const platform = req.params.platform;
  const platformArray = platform.split(",");
  try {
    platform === "all"
      ? (result = await NewWebtoon.find())
      : (result = await NewWebtoon.find({ platform: { $in: platformArray } }));
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getNewWebtoons,
};
