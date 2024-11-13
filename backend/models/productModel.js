import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, require: true },
  image: { type: String, require: true },
  category: { type: String, require: true },
  new_price: { type: Number, require: true },
  old_price: { type: Number, require: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
