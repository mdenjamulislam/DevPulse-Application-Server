import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.join(process.cwd(), ".env"),
});

const config = {
    post: process.env.PORT || 3000,
    connection_string: process.env.CONNECTIONSTRING,
};

export default config;
