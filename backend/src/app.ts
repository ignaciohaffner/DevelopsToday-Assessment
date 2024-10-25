import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Working.");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
