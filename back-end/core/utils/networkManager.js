import get_logger from "./logger";

const logger = get_logger('NetworkManage');

export function sockerManager (socket) {
    function broadcasterMovePlayer (data) {
        logger.debug({ socket: socket.id, data });
        socket.broadcast.emit("MovePlayer", data);
    }

    socket.on("MovePlayer", broadcasterMovePlayer);
}

