const { UpdateNaver } = require("./new/naver");

const getNewWebtoons = async (req, res) => {
  const platform = req.params.platform;
  const x = platform.split(",");
  console.log(x);
  const result = [];
  if (x.includes("전체")) {
    await Naver();
  } else if (x.includes("네이버")) {
    await Naver();
  } else {
    console.log("???");
  }

  try {
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log("error");
    res.status(404).json({ message: error.message });
  }

  async function Naver() {
    const webtoons = await UpdateNaver();
    result.push(...webtoons);
  }
};

module.exports = {
  getNewWebtoons,
};
