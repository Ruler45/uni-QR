import { nanoid } from "nanoid";
import { Url } from "../models/url.model.js";

const handleUrlShorten = async (req, res) => {
  const urlCode = nanoid(6);
  if (!req.body) {
    return res.status(400).json("URL is required");
  }
  const { originalUrl } = req.body;

  // console.log(req.body);
  try {
    await Url.create({
      qrUrl: urlCode,
      originalUrl: originalUrl,
    });

    return res.status(201).json({
      message: `qrURL successfully generated to ${req.hostname}${req.originalUrl}/${urlCode}`,
      qrUrl: `${req.hostname}${req.originalUrl}/${urlCode}`,
      originalUrl: originalUrl
    });
  } catch {
    const url = await Url.findOne({ originalUrl: originalUrl });

    if (url) {
      return res
        .status(403)
        .json({
          message: "URL already exists",
          qrUrl: `${req.hostname}${req.originalUrl}/${url.qrUrl}`,
        });
    }
    return res.status(500).json("Something went wrong");
  }
};

export default handleUrlShorten;
