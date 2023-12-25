import dotenv from "dotenv";
dotenv.config();
import colors from "colors";

import Server from "./src/server.js";

const server = new Server();
server.listen();
