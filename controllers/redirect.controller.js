import { Url } from "../models/url.model.js";

const handleRidirect = async (req,res)=>{
        const shortUrl = req.params.qrUrl;
        const url = await Url.findOne({qrUrl: shortUrl});
        console.log(url);
        if(url){
            res.redirect(url.originalUrl)
            try{
                const update= await Url.updateOne({qrUrl:shortUrl},{totalClicks:url.totalClicks+1})
            }catch{
                
            }
            
        }
        else{
            res.redirect("https://google.com")
        }

}

export default handleRidirect;