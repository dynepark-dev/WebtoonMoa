const { Update } = require("./new/naver");

const getNaver = async (req, res) => {
  try {
    const webtoons = await Update();
    res.json(webtoons);
  } catch {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getNaver,
};
