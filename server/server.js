import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("API successfully connected.");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`)); 