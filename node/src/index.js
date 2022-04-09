const express = require("express");
const mongoose = require("mongoose");
const app = express();
const webtoonRoutes = require("./routes/webtoon.routes");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const { getUpdatedList, Update } = require("./controllers/naver");
const cache = require("./middleware/routeCache");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ORIGIN, credentials: true }));

// Routes
app.use("/webtoon", webtoonRoutes);

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

// DB
mongoose
  .connect(MONGODB_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
//
