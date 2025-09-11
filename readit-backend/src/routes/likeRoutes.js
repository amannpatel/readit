const express = require("express");
const router = express.Router();
const likeCtrl = require("../controllers/likeController");
const { auth } = require("../middlewares/auth");

router.post("/:postId", auth, likeCtrl.likePost);
router.delete("/:postId", auth, likeCtrl.unlikePost);

module.exports = router;
