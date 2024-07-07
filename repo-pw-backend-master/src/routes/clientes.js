import express from 'express';
import clientesController from '../controllers/clientes.js';

const router = express.Router();

router.get('/', clientesController.findAll);
router.get('/:id', clientesController.findOne);
router.post('/', clientesController.create);
router.delete('/:id', clientesController.remove);
router.put('/', clientesController.update);


export default router;