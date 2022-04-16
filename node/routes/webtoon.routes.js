const { Router } = require("express");
const router = Router();

const webtoonController = require("../controllers/webtoon.controller");

router.get("/", webtoonController.getWebtoons);
router.get("/:id", webtoonController.getWebtoon);
router.get("/updated", webtoonController.getWebtoonsUpdated);
router.get("/recommended", webtoonController.getWebtoonsRecommended);
router.get("/bookmark", webtoonController.getBookmarked);
router.get("/search/:name", webtoonController.searchWebtoon);
router.post("/", webtoonController.postWebtoon);

module.exports = router;
