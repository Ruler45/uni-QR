import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    originalUrl:{
        type: String,
        required: true,
        unique: true
    },
    totalClicks:{
        type: Number,
        default: 0,
    },
    
}, {timestamps: true});


export const Url= mongoose.model("Url", urlSchema);