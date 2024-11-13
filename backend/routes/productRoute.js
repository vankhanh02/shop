import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  newCollection,
  popularWomen,
} from "../controllers/productController.js";
const productRouter = express.Router();

productRouter.post("/addproduct", addProduct);
productRouter.get("/allproduct", listProduct);
productRouter.post("/deleteproduct", removeProduct);
productRouter.get("/newcollection", newCollection);
productRouter.get("/popularwomen", popularWomen);
export default productRouter;
