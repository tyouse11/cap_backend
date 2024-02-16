import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;

const orderSchema = new Schema(
    {
        items: [cartItemSchema],
        totalPrice: { type: Number, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    }
)
const Order = model("Order", orderSchema);

// make exportable to be accessed in index.mjs
export default Order;