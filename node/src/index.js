const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const { getUpdatedList, Update } = require("./controllers/naver");
const cache = require("./middleware/routeCache");

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send(`Hello World! Hello ${process.env.NAME}~!!!!`);
});

app.get("/length", cache(3000), async (req, res) => {
  const [$, $webtoonList] = await getUpdatedList();
  const length = $webtoonList.length;
  res.send(`Naver Updates Length : ${length}`);
});

app.get("/webtoons", cache(3000), async (req, res) => {
  const webtoons = await Update();
  res.json(webtoons);
});

app.listen(PORT, () => {
  console.log(`port: ${PORT}`);
});
