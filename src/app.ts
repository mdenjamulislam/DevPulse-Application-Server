import express, { type Application, type Request, type Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:5000",
    }),
);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "DevPulse Server",
        author: "Enjamul Islam",
    });
});

// API endpoint

export default app;
