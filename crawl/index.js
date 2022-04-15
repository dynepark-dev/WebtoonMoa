const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const scheduler = require("./scheduler");

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
const ORIGIN = process.env.ORIGIN;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ORIGIN, credentials: true }));

// DB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
//

// Routes

app.get("/", (req, res) => {
  res.send(`Hello World! Crawl App Started!!`);
});
