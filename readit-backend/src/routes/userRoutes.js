const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");
const { auth } = require("../middlewares/auth");

router.get("/me", auth, userCtrl.getMe);
router.patch("/me", auth, userCtrl.updateMe);
router.get("/:username", userCtrl.getByUsername);

module.exports = router;
