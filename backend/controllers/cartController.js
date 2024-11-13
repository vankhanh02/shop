import userModel from "../models/userModel.js";

const getCart = async (req, res) => {
  let userData = await userModel.findOne({ _id: req.user.id });
  res.json(userData.cartData);
};

const addToCart = async (req, res) => {
  let userData = await userModel.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await userModel.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Added");
};

const removeFromCart = async (req, res) => {
  let userData = await userModel.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await userModel.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Removed");
};

export { getCart, addToCart, removeFromCart };
