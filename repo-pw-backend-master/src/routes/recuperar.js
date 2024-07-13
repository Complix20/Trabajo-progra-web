import express from 'express';
import recuperarController from '../controllers/recuperarController.js';

const router = express.Router();

router.post('/', recuperarController.recuperar);

export default router;
