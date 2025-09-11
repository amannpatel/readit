const userService = require("../services/userService");
const { success, error } = require("../utils/response");

exports.getMe = async (req, res) => {
  try {
    const user = await userService.getProfile(req.user.id);
    if (!user) return error(res, 404, "User not found");
    return success(res, "Profile fetched", user);
  } catch (err) {
    return error(res, 400, err.message);
  }
};

exports.updateMe = async (req, res) => {
  try {
    const updateUser = await userService.updateProfile(req.user.id, req.body);
  } catch (err) {
    return error(res, 400, err.message);
  }
};

exports.getByUsername = async (req, res) => {
  try {
    const user = await userService.getUserByUsername(req.params.username);
    if (!user) return error(res, 400, "User not found");
    return success(res, "User profile fetched", user);
  } catch (err) {
    return error(res, 400, err.message);
  }
};
