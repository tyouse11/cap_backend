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

app.use(cors());
app.use(express.json());
app.use("/products", products );


// root route
app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });