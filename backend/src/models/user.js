import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default:"member",
    },   
    },
    {
        timestamps: true, 
        versionKey: false,
    }
);
export default mongoose.model("User",userSchema)