import express from 'express';
import clientesDireccionesController from '../controllers/clientesDirecciones.js';

const router = express.Router();

router.get('/', clientesDireccionesController.findAll);
router.get('/:id', clientesDireccionesController.findOne);
router.post('/', clientesDireccionesController.create);
router.delete('/:id', clientesDireccionesController.remove);
router.put('/', clientesDireccionesController.update);


export default router;