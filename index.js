import express from "express";
import cors from "cors";
import userRoutes from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// 🔥 Register API before static frontend
app.use("/api", userRoutes);

// Serve frontend build (after API)
app.use(express.static(path.join(__dirname, "./web/dist")));

// Fallback to index.html for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./web/dist/index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
