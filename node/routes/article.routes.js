const { Router } = require("express");
const router = Router();

const ArticleController = require("../controllers/article.controller");
const { requireAuth, checkUser } = require("../middleware/auth.middleware");

router.get("/", ArticleController.getArticles);
router.get("/:id", ArticleController.getSingleArticle);
router.post("/", ArticleController.postArticle);
router.delete("/:id", requireAuth, ArticleController.deleteArticle);
router.patch("/like", checkUser, ArticleController.likeArticle);

module.exports = router;
