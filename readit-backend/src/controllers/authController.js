const authService = require("../services/authService");
const { success, error } = require("../utils/response");

exports.register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    return res.status(201).json({
      status: "success",
      message: "Registered successfully",
      data: result,
    });
  } catch (err) {
    return error(res, 400, err.message);
  }
};

exports.login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    return success(res, "Login successfull", result);
  } catch (err) {
    return error(res, 400, err.message);
  }
};
