import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.join(process.cwd(), ".env"),
});

const config = {
    post: process.env.PORT || 3000,
    connection_string: process.env.CONNECTIONSTRING,
    jwt_secret: process.env.JWT_SECRET,
    access_token_expire: process.env.ACCESS_TOKEN_EXPIRE,
};

export default config;
