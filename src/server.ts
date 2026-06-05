import express, { type Request, type Response } from "express";
import config from "./config";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(config.post, () => {
    console.log(`DevPulse app listening on port ${config.post}`);
});
