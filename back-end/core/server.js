import { createServer } from 'http';
import { get_logger } from "#utils";
import app from "./app";

const logger = get_logger("SERVER");
const server = createServer(app);

logger.debug('Server created');
export default server;