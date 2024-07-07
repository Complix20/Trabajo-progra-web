import express from 'express';
import ordenesController from '../controllers/ordenes.js';

const router = express.Router();

router.get('/', ordenesController.findAll);
router.get('/:id', ordenesController.findOne);
router.post('/', ordenesController.create);
router.delete('/:id', ordenesController.remove);
router.put('/', ordenesController.update);


export default router;