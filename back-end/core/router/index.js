import express from 'express';
import get_logger from '../utils/logger.js';


const router = express.Router();
const logger = get_logger('GameRouter');

router.get('/chunk/:x/:y');

export default router;