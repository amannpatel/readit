const User = require("../models/User");
const { generateToken } = require("../utils/jwt");

exports.register = async (data) => {
  const user = new User(data);
  await user.save();
  const token = generateToken(user);
  const { password, ...userData } = user.toObject();
  return { user: userData, token };
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateToken(user);
  const { password: pw, ...userData } = user.toObject();
  return { user: userData, token };
};
