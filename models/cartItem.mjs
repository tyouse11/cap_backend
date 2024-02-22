import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const cartItemSchema = new Schema(
    {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
    }
)
const CartItem = model("CartItem", cartItemSchema);

export default CartItem;