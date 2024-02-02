import express from "express";
import urlRoute from "./routes/url.route.js";
import connectDB from "./db.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const port = process.env.PORT || 4000;
const app = new express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/qr", urlRoute);

app.listen(port, async () => {
  await connectDB();
  console.log("Server is running on port", port);
});

app.get("/", (req, res) => {
  res.send("Your API is working perfectly!");
});
