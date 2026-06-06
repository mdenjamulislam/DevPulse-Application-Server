import config from "./config";
import app from "./app";
import { initDB } from "./db";


const main = () => {
    initDB();
    app.listen(config.post, () => {
        console.log(`DevPulse app listening on port ${config.post}`);
    });
}

main();

