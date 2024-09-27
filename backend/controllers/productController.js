import productModel from "../models/productModel";
import fs from "fs";

//add item
const addproduct = async (req, res) => {
  let image_file = `${req.file.filename}`;
  const product = new productModel({
    name: req.body.name,
    description: req.body.description,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
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
export { addproduct };
