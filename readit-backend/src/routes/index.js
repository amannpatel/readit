const express = require("express");
const router = express.Router();

router.use("/auth", require("./authRoutes"));
router.use("/posts", require("./postRoutes"));
router.use("/comments", require("./commentRoutes"));
router.use("/likes", require("./likeRoutes"));
router.use("/users", require("./userRoutes"));

module.exports = router;
