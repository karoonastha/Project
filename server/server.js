import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js"
import { clerkMiddleware } from '@clerk/express'


await connectDB() 


const app = express();
app.use(cors());

//Middleware Setup
app.use(express.json()) //Enables JSOM request body parsing
app.use(clerkMiddleware())


app.get('/', (req, res) => {
    res.send("API successfully connected.");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`)); 