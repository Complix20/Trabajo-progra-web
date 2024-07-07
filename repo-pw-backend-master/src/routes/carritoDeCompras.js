import express from 'express';
import carritoDeComprasController from '../controllers/carritoDeCompras.js';

const router = express.Router();

router.get('/', carritoDeComprasController.findAll);
router.get('/:id', carritoDeComprasController.findOne);
router.post('/', carritoDeComprasController.create);
router.delete('/:id', carritoDeComprasController.remove);
router.put('/', carritoDeComprasController.update);


export default router;