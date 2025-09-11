const User = require("../models/User");

exports.getProfile = async (userId) => {
  return User.findById(userId).select("-password");
};

exports.updateProfile = async (userId, updateData) => {
  delete updateData.password; // prevent password updates here
  return User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  }).select("-password");
};

exports.getUserByUsername = async (username) => {
  return User.findOne({ username }).select("-password");
};
