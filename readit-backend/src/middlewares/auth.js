const jwt = require("jsonwebtoken");
const { error } = require("../utils/response");

exports.auth = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return error(res, 401, "Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("REC========>", req);
    req.user = decoded; // {id, role}
    console.log("REC========>", req);
    next();
  } catch (err) {
    return error(res, 403, "Invalid or expired token");
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user?.role !== "ADMIN") {
    return error(res, 403, "Admin access required");
  }
  next();
};
