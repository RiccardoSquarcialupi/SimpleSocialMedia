import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        likes: [],
        image: String
    }
}, {
    timestamps: true
});