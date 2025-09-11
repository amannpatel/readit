exports.success = (res, message, data = {}) => {
  return res.status(200).json({ status: "success", message, data });
};

exports.error = (res, code, message) => {
  return res.status(code).json({ status: "error", message });
};
