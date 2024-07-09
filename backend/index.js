const port = 4000;
//import dependencies
const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//connect db
mongoose.connect("mongodb+srv://khanhvvan:060102@cluster0.hofsmry.mongodb.net/e-commerce");

//API create
app.get("/", (req, res) =>{
    res.send("Express App is running")

})
app.listen(port, (error) => {
    if (!error){
        console.log("Server is running on Port " + port)
    }
    else{
        console.log("Error : " + error)
    }

})

//Image storage

const storage = multer.diskStorage({
    //pass object
    destination: './upload/image',
    filename: (req, file, cb) =>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})