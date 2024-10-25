import express from "express";
import dotenv from "dotenv";
import countriesRoute from "./routes/country.route";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use("/api", countriesRoute);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
