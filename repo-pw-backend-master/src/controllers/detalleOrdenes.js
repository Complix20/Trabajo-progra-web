import model from '../models/detalleOrdenes.js';
import Orden from '../models/ordenes.js';
import Producto from '../models/productos.js';
import RepositoryBase from '../repositories/repositorio.js';

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
    try {
        const detalleOrdenes = await repository.findAll({
            include: [
                { model: Orden, as: 'orden' },
                { model: Producto, as: 'producto' }
            ]
        });
        return sendResult(detalleOrdenes, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching order details' });
    }
}

const create = async (req, res) => {
    try {
        const detalleOrden = req.body;
        console.log(detalleOrden);
        const detalleOrdenCreated = await repository.create(detalleOrden);
        return sendResult(detalleOrdenCreated, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating order detail' });
    }
}

const findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.findOne({
            where: { id },
            include: [
                { model: Orden, as: 'orden' },
                { model: Producto, as: 'producto' }
            ]
        });
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching order detail' });
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.remove(id);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting order detail' });
    }
}

const update = async (req, res) => {
    try {
        const detalleOrden = req.body;
        const result = await repository.update(detalleOrden);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating order detail' });
    }
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(404).json({ message: 'Detalle de orden no encontrado.' });
}

const controller = { findAll, create, findOne, remove, update };

export default controller;
