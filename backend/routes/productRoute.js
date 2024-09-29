import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
} from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();

//store image
const storage = multer.diskStorage({
  //pass object
  destination: "./uploads/images",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
//upload endpoint

productRouter.post("/addproduct", upload.single("image"), addProduct);
productRouter.get("/allproduct", listProduct);
productRouter.post("/deleteproduct", removeProduct);
export default productRouter;
