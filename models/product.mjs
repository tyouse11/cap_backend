import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        breed: { type: String, required: true },
        price: { type: Number, required: true },
        imageUrl: { type: String, required: true },
    }
)
const Product = model("Product", productSchema);

export default Product;