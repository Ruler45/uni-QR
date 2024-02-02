import express from "express";
import handleUrlShorten from "../controllers/url.controller.js";
import handleRidirect from "../controllers/redirect.controller.js";
import { Url } from "../models/url.model.js";

const router = express.Router();

router.post("/", handleUrlShorten);

router.get("/",async(req,res)=>{
     const data =await Url.find({});
     return res.status(201).json(data)
});

router.post("/manage/:qrUrl",async(req,res)=>{
    const shortUrl = req.params.shortUrl;
    try{
        const update= await Url.updateOne({shortUrl:shortUrl},{originalUrl:req.body.originalUrl})
       return res.status(202).json(update);
    }catch{
        return res.status(500).json({message: "somethimg went wrong"})
    }
})

router.get("/:qrUrl", handleRidirect);

export default router;