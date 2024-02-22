import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import products from "./routes/products.mjs";
import cors from 'cors';

dotenv.config();

// Connection string
const MONGO_URI = process.env.MONGO_URI;
const db = mongoose.connection;

// Conncect to MongoDB through Mongoose
mongoose.connect(MONGO_URI)

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongodb not running?"));
db.once("open", () => console.log("mongo connected: ", MONGO_URI));
db.on("close", () => console.log("mongo disconnected"));

const PORT = process.env.PORT || 5000;
const app = express();

// CORS middleware enables backend to accept request from front end
app.use(cors());
app.use(express.json());
app.use("/products", products );


// root route
app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

// Global error handling middleware
app.use((err, req, res, next) => {
  // Check if the error is a mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(error => error.message);
    return res.status(400).json({ error: 'Validation error', errors });
  }

  // Handle other types of errors
  switch (err.name) {
    case 'UnauthorizedError':
      return res.status(401).json({ error: 'Unauthorized', message: 'Invalid token' });
    case 'NotFoundError':
      return res.status(404).json({ error: 'Not found', message: 'Resource not found' });
    default:
      console.error(err.stack);
      return res.status(500).json({ error: 'Internal server error', message: 'Something went wrong' });
  }
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });