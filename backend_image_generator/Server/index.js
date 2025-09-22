import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import deotenv from "dotenv";

deotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/image", async (req, res) => {
  try {
    const query = req.query.query;
    const accessKey = "z9DOqPLVHALHt-UnnVxAC21gAC3MhrdaRpoW844_gzg";
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=12`
    );
    console.log("data from backend");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on   http://localhost:${PORT} `);
});
