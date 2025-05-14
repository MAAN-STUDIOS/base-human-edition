/*
id
type
health
vector
speed

events

movePlayer
moveNPC
attack
 */

import { createServer } from 'http';
import express from 'express';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import get_logger from "./core/utils/logger.js";
import { sockerManager } from "./core/utils/networkManager";


const logger = get_logger("MAIN");
const port = process.env.PORT || 3001;
const envFile = `.env.${process.env.NODE_ENV || `develop`}`;

logger.debug(`Mounting ${envFile} as environment file.`)
dotenv.config({ path: envFile });

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL
    }
});


io.on("connect", sockerManager);

server.listen(port, () => {
    logger.info(`Server listening on https://locahost:${port} ...`);
});
