"use strict";
import logger from "./logger.js";

const api_url = "http://localhost:3000";

async function get_map_chunk(coordinates_x, coordinates_y) {
    const response = await fetch(`${api_url}/map/chunk/${coordinates_x}/${coordinates_y}`);
    if (!response.ok) {
        logger.error("Error fetching map chunk");
        return null;
    }
    const data = await response.json();
    return data;

}
