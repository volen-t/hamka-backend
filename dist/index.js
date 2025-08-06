import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { shelvesRouter } from "./routes/shelves";
import { yarnsRouter } from "./routes/yarns";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api/shelves", shelvesRouter);
app.use("/api/yarns", yarnsRouter);
app.get("/", (req, res) => {
    res.send("HAMKa Backend is running!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
