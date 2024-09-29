const port = 4000;
//import dependencies
import express from "express";
import cors from "cors";
import { dbConnection } from "./config/dataconfig.js";
import productModel from "./models/productModel.js";
import productRouter from "./routes/productRoute.js";
const app = express();
//const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");
//const multer = require("multer");
//const path = require("path");
//const { StringDecoder } = require("string_decoder");

app.use(express.json());
app.use(cors());

//connect db
dbConnection();

//endpoint for productRoutes
app.use("/api/product", productRouter);
app.use("/images", express.static("uploads/images"));
//API create
app.get("/", (req, res) => {
  res.send("Express App is running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on Port " + port);
  } else {
    console.log("Error : " + error);
  }
});
