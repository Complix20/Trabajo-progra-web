import express from 'express';
import rolesController from '../controllers/roles.js';

const router = express.Router();

router.get('/', rolesController.findAll);
router.get('/:id', rolesController.findOne);
router.post('/', rolesController.create);
router.delete('/:id', rolesController.remove);
router.put('/', rolesController.update);


export default router;