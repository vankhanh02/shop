import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login
const loginUser = async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (user && req.body.password === user.password) {
    const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
    res.json({ success: true, token });
  } else {
    res.json({
      success: false,
      error: user ? "Wrong Password" : "Wrong Email Id",
    });
  }
};
//create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
//register
const registerUser = async (req, res) => {
  let check = await userModel.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, error: "existing user email found" });
  }

  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new userModel({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();
  const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
  res.json({ success: true, token });
};

export { loginUser, registerUser };
