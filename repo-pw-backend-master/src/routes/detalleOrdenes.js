import express from 'express';
import detalleOrdenesController from '../controllers/detalleOrdenes.js';

const router = express.Router();

router.get('/', detalleOrdenesController.findAll);
router.get('/:id', detalleOrdenesController.findOne);
router.post('/', detalleOrdenesController.create);
router.delete('/:id', detalleOrdenesController.remove);
router.put('/', detalleOrdenesController.update);


export default router;