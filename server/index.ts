import express from "express";
import cors from "cors";
import { readFileSync } from "fs";
import { join } from "path";

const app = express();
app.use(cors());

app.get("/ping", (req, res) => res.json("pong"));

app.get("/api/kyc/raw", (req, res) => {
  try {
    const rawDataPath = join(__dirname, "data", "raw_kyc_data.json");
    const rawData = readFileSync(rawDataPath, "utf-8");
    const jsonData = JSON.parse(rawData);

    res.json(jsonData);
  } catch (error) {
    console.error("Error reading raw KYC data:", error);
    res.status(500).json({
      error: "Failed to load raw KYC data",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.listen(8080, () => console.log("Server on 8080"));
