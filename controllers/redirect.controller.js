import { Url } from "../models/url.model.js";

const handleRidirect = async (req,res)=>{
        const shortUrl = req.params.shortUrl;
        const url = await Url.findOne({shortUrl: shortUrl})
        if(url){
            res.redirect(url.originalUrl)
            // try{
            //     const update= await Url.updateOne({shortUrl:shortUrl},{totalClicks:url.totalClicks+1})
            // }catch{
                
            // }
            
        }
        else{
            res.redirect("https://google.com")
        }

}

export default handleRidirect;