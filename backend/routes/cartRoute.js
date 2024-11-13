import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  getCart,
  addToCart,
  removeFromCart,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/getcart", authMiddleware, getCart);
cartRouter.post("/addtocart", authMiddleware, addToCart);
cartRouter.post("/removefromcart", authMiddleware, removeFromCart);

export default cartRouter;
