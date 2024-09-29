import mongoose from "mongoose";

export const dbConnection = async () => {
  await mongoose
    .connect(
      "mongodb+srv://khanhvvan:060102@cluster0.3xphx.mongodb.net/ecommerce"
    )
    .then(() => console.log("DB Connected"));
};
