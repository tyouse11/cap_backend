import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },    
    }
)
const user = model("user", userSchema);

// make exportable to be accessed in index.mjs
export default user;