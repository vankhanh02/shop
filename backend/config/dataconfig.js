import mongoose from "mongoose";

export const dbConnection = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vannvan02:060102@cluster0.6uk4f.mongodb.net/ecommerce"
    )
    .then(() => console.log("DB Connected"));
};
