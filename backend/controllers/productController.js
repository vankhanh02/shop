import productModel from "../models/productModel.js";
import fs, { appendFile } from "fs";

//add item
const addProduct = async (req, res) => {
  let products = await productModel.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  let image_file = `${req.file.filename}`;
  const product = new productModel({
    id: id,
    name: req.body.name,
    description: req.body.description,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    category: req.body.category,
    image: image_file,
  });
  try {
    await product.save();
    res.json({
      success: true,
      message: "Product added",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error,
    });
  }
};
//remove product
const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    fs.unlink(`uploads/images/${product.image}`, () => {});

    await productModel.findByIdAndDelete(req.body.id);
    res.json({
      success: true,
      message: "Product Removed",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};
//list product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.json({
      sucess: false,
      messages: "Error",
    });
  }
};

export { addProduct, listProduct, removeProduct };
