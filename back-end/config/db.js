import mysql from 'mysql2/promise';
import { get_logger, failureCheck } from "#utils";


const logger = get_logger("DATABASE");
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_ROOT_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectionTimeout: 1000
};
failureCheck.atObjectNullSafe(dbConfig, 'Missing database configuration');

/**
 * @type {import('mysql2/promise')}
 */
let pool;

/**
 * Initialize the database connection pool
 */
async function initDB() {
    try {
        pool = mysql.createPool(dbConfig);

        const connection = await pool.getConnection();
        logger.info('Database connection established successfully');
        connection.release();

        return pool;
    } catch (error) {
        logger.error(`Failed to initialize database: ${error.message}`);
        throw error;
    }
}

/**
 * Execute a database query
 * @param {String} sql - SQL query to execute
 * @param {Array} params - Parameters for the query
 * @returns {Promise} Query result
 */
async function query(sql, params) {
    try {
        const [rows] = await pool.execute(sql, params);
        return rows;
    } catch (error) {
        logger.error(`Query error: ${error.message}`);
        throw error;
    }
}


(async () => {
    try {
        await initDB();
    } catch (err) {
        logger.error("Initial DB init failed:", err);
    }
})();

if (process.env.DEBUG) {
    await failureCheck.atDBConnection(pool, query, initDB, logger);
}

process.on('SIGINT', async () => {
    if (pool) {
        await pool.end();
        console.log('MySQL pool closed');
        logger.info('MySQL pool closed');
    }
    process.exit(0);
});

export {
    query,
    pool
};