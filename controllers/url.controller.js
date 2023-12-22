import { nanoid } from "nanoid";
import { Url } from "../models/url.model.js";

const handleUrlShorten = async (req, res) => {
  const urlCode = nanoid(6);
  console.log(req.originalUrl);
  if (!req.body) {
    return res.status(400).json("URL is required");
  }
  const { originalUrl } = req.body;

  console.log(req.body);
  try {
    await Url.create({
      shortUrl: urlCode,
      originalUrl: originalUrl,
    });

    return res.status(201).json({
      message: `URL successfully shortened to ${req.originalUrl}/${urlCode}`,
      shortUrl: `${req.originalUrl}/${urlCode}`,
      originalUrl: originalUrl
    });
  } catch {
    const url = await Url.findOne({ originalUrl: originalUrl });

    if (url) {
      return res
        .status(403)
        .json({
          message: "URL already exists",
          shortUrl: `${req.originalUrl}/${url.shortUrl}`,
        });
    }
    return res.status(500).json("Something went wrong");
  }
};

export default handleUrlShorten;
