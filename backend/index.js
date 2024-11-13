const port = 4000;
// Import dependencies using ES module syntax
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import { StringDecoder } from "string_decoder";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import userModel from "./models/userModel.js";
import productModel from "./models/productModel.js";
import { dbConnection } from "./config/dataconfig.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the database
dbConnection();

// API route for the root
app.get("/", (req, res) => {
  res.send("Express App is running");
});

// Image storage setup
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });
app.use("/images", express.static(path.join(__dirname, "upload/images")));

// Upload endpoint
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

/* // create new collection

app.get("/newcollection", async (req, res) => {
  let products = await productModel.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("New Collection Fetch");
  res.send(newcollection);
});
// popular in woman
app.get("/popularwomen", async (req, res) => {
  let products = await productModel.find({ category: "women" });
  let popularwomen = products.slice(0, 4);
  console.log("Popular in women fetch");
  res.send(popularwomen);
}); */

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on Port " + port);
  } else {
    console.log("Error : " + error);
  }
});
