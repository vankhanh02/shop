import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User doesn't exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = createToken(user._id);
    return res.json({
      success: true,
      token,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error",
    });
  }
};
//create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
//register
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({
        success: false,
        message: "User already exist",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be longer than 7 characters",
      });
    }
    //hash user pass
    const salt = await bcrypt.genSalt(10);
    const hashedPasswd = await bcrypt.hashSync(password, salt);

    //creat user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPasswd,
    });
    //save userin db
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({
      success: true,
      token,
    });

    //creat token and send token to user
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};
const fetchUser = async (req, res) => {};
const getCart = async (req, res) => {};
const addToCart = async (req, res) => {};
const removeFromCart = async (req, res) => {};
export { loginUser, registerUser, getCart };
