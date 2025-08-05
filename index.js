import express from "express";
import cors from "cors";
import userRoutes from "./routes/index.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
