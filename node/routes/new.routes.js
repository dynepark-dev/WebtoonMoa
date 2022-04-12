const { Router } = require("express");
const router = Router();

const newController = require("../controllers/new.controller");

router.get("/naver", newController.getNaver);

module.exports = router;
