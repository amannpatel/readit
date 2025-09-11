const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const postCtrl = require("../controllers/postController");

router.post("/", auth, postCtrl.create);
router.get("/", postCtrl.list);
router.get("/:slug", postCtrl.getBySlug);
router.patch("/:slug", auth, postCtrl.update); // only author/admin
router.delete("/:slug", auth, postCtrl.remove); // only author/admin

module.exports = router;
