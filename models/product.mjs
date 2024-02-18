import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;

const productSchema = new Schema(
    {
        id: { type: String, required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        imageUrl: { type: String, required: true },
    }
)
const Product = model("Product", productSchema);

// make exportable to be accessed in index.mjs
export default Product;