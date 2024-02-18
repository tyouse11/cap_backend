import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb"; // comes from MongoDB library
import Product from '../models/product.mjs';
import products from "../data/products.mjs";

const router = express.Router();

// Insert Products Data into MongoDB
router.post('/insert-products', async (req, res) => {
  try {
      const result = await Product.insertMany(products);
      res.status(201).json(result);
  } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
  }
});

// Index - Find all products
router.get('/', async (req, res) => {
  let products = await Product.find().limit(50)
  res.status(200).json({
    products: products
  })
})

// // Define route to add a new product
// router.post("/products", async (req, res) => {
//     try {
//       const { title, price, imageUrl } = req.body;
//       // Create a new product document
//       const newProduct = new Product({ title, price, imageUrl });
//       // Save the product to the database
//       await newProduct.save();
//       res.status(201).json(newProduct); // Respond with the newly created product
//     } catch (error) {
//       console.error("Error adding product:", error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   });

  export default router;