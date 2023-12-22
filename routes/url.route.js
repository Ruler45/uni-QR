import express from "express";
import handleUrlShorten from "../controllers/url.controller.js";
import handleRidirect from "../controllers/redirect.controller.js";

const router = express.Router();

router.post("/", handleUrlShorten);

router.get("/:shortUrl", handleRidirect);

export default router;