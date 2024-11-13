import productModel from "../models/productModel.js";
import fs, { appendFile } from "fs";

//add item
const addProduct = async (req, res) => {
  let products = await productModel.find({});
  let id = products.length > 0 ? products.slice(-1)[0].id + 1 : 1;

  const product = new productModel({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  await product.save();
  res.json({ success: 1, name: req.body.name });
};
//remove product
const removeProduct = async (req, res) => {
  await productModel.findOneAndDelete({ id: req.body.id });
  res.json({ success: 1, name: req.body.name });
};
//list product
const listProduct = async (req, res) => {
  let products = await productModel.find({});
  res.send(products);
};
const newCollection = async (req, res) => {
  let products = await productModel.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("New Collection Fetch");
  res.send(newcollection);
};
const popularWomen = async (req, res) => {
  let products = await productModel.find({ category: "women" });
  let popularwomen = products.slice(0, 4);
  console.log("Popular in women fetch");
  res.send(popularwomen);
};
export { addProduct, listProduct, removeProduct, newCollection, popularWomen };
