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

// Find all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().limit(50).exec(); // Limit the number of products returned
    res.status(200).json({
      products: products
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Sort products by price
router.get('/sort-by-price', async (req, res) => {
  try {
    const products = await Product.find().sort({ price: 1 })
    res.status(200).json({
      products: products
    });
  } catch (error) {
    console.error("Error fetching products sorted by price:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single product by id
router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json( { error: "Pup Not Found"} );
    }
    res.status(200).json({
      data: product
    })
  } catch (error) {
    console.error;
    res.status(500).send("Internal Server Error")
  }
});

// Define route to add a new product
router.post("/", async (req, res) => {
    try {
      const { name, breed, price, imageUrl } = req.body;
      // Create a new product document
      const newProduct = new Product({ name, breed, price, imageUrl });
      // Save the product to the database
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Update a product by ID
router.put("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, breed, price, imageUrl } = req.body;

    // Find the product by ID and update it
    const updatedProduct = await Product.findByIdAndUpdate(productId, { name, breed, price, imageUrl }, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

  // Delete a product by ID
  router.delete("/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.status(204).json({
      data: "Pup has been deleted"
    })
  })

  export default router;