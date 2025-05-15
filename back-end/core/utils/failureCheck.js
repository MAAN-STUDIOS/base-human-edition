function atObjectNullSafe(config, errMsg) {
    for (const [key, value] of Object.entries(config)) {
        if (!value) {
            throw new Error(`${errMsg}: ${key}`);
        }
    }
}

async function atDBConnection(pool, query, initializer, logger) {
    try {
        if (!pool) {
            await initializer();
        }

        const result = await query("SELECT 1 + 1 AS solution");
        logger.debug(`Database test query result (1 + 1): ${result}`);
        logger.info("Database connection verified and ready");
        return true;
    } catch (err) {
        logger.error("Database connection test failed:\n", err);
        return false;
    }
}

export {
    atObjectNullSafe,
    atDBConnection,
}