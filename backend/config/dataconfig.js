import mongoose from "mongoose";

export const dbConnection = async () => {
  await mongoose
    .connect(
      "mongodb+srv://khanhvvan:060102@cluster0.hofsmry.mongodb.net/e-commerce"
    )
    .then(() => console.log("DB Connected"));
};
