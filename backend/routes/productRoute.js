import express from "express";
import { addproduct } from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();
productRouter.post("/api/food", addproduct);

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

productRouter.post("/addproduct", upload.single("image"), addproduct);

export default productRouter;
