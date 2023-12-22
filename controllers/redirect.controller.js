import { Url } from "../models/url.model.js";

const handleRidirect = async (req,res)=>{
        const shortUrl = req.params.shortUrl;
        const url = await Url.findOne({shortUrl: shortUrl})
    
        if(url){
            res.redirect(url.originalUrl)
        }
        else{
            res.redirect("https://google.com")
        }
    
        console.log(req.originalUrl);
}

export default handleRidirect;