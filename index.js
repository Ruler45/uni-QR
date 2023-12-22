import express from "express";
import urlRoute from "./routes/url.route.js";
import connectDB from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const port=process.env.PORT || 4000;
const app = new express();
app.use(express.json());
app.use("/api/url", urlRoute);

app.listen(port, () => {
    console.log("Server is running on port", port);
});

app.get("/", (req, res) => {
    res.send("Your API is working perfectly!");
});


connectDB();