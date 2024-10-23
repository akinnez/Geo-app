import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env["PORT"] || 5173;

const { VITE_Wiki_URL, VITE_NewsApi_Url } = process.env;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/wiki", async (req, res) => {
  try {
    const response = await axios.get(`${VITE_Wiki_URL}`, {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/news", async (req, res) => {
  try {
    const response = await axios.get(`${VITE_NewsApi_Url}`, {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/tracking", async (req, res) => {
  console.log(req.params, 1);
  try {
    const response = await axios.post(
      `https://api.iskytracking.com/v2/tracking`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post("/api/tracking/search", async (req, res) => {
  console.log(req.params, 2);
  try {
    const response = await axios.post(
      `https://api.iskytracking.com/v2/tracking/${req.params}`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
