// Import dependencies using ES module syntax
import express from "express";
import multer from "multer";
import path from "path";
import cors from "cors";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import { dbConnection } from "./config/dataconfig.js";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT;
const baseURL = process.env.BASE_URL;

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
    image_url: `${baseURL}:${port}/images/${req.file.filename}`,
  });
});
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on Port " + port);
  } else {
    console.log("Error : " + error);
  }
});
