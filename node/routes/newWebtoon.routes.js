const { Router } = require("express");
const router = Router();

const newController = require("../controllers/newWebtoon.controller");

router.get("/:platform", newController.getNewWebtoons);

module.exports = router;
