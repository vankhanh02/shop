const port = 4000;
//import dependencies
const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { StringDecoder } = require("string_decoder");

app.use(express.json());
app.use(cors());

//connect db
mongoose.connect("mongodb+srv://khanhvvan:060102@cluster0.hofsmry.mongodb.net/e-commerce");

//API create
app.get("/", (req, res) =>{
    res.send("Express App is running")

});

//Image storage

const storage = multer.diskStorage({
    //pass object
    destination: './upload/images',
    filename: (req, file, cb) =>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage:storage});
//upload endpoint

app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('product'), (req,res) =>{
    res.json({
        success:1, 
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    });
});

//product schema

const Product= mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name:{
        type: String,
        require: true,
    },
    image:{
        type: String,
        require: true,
    },
    category:{
        type: String,
        require: true,
    },
    new_price:{
        type: Number,
        require: true,
    },
    old_price:{
        type: Number,
        require: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },
})

app.post('/addproduct', async (req, res) =>{
    let products = await Product.find({});
    let id;
    if (products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id= last_product.id +1
    }
    else {
        id=1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved")
    res.json({
        success:1,
        name: req.body.name,
    })
} )

// delete product API
app.post('/removeproduct', async (req, res) =>{
    await Product.findOneAndDelete({id: req.body.id});
    console.log("Removed");
    res.json({
        success:1,
        name: req.body.name
    })
})

//get all product
app.get('/allproduct', async(req,res)=>{
    let products = await Product.find({})
    console.log("All Product Fetched");
    res.send(products);

})
app.listen(port, (error) => {
    if (!error){
        console.log("Server is running on Port " + port);
    }
    else{
        console.log("Error : " + error);
    }

});

