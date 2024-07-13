import model from '../models/ordenes.js';
import Cliente from '../models/clientes.js';
import RepositoryBase from '../repositories/repositorio.js';

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
    try {
        const ordenes = await repository.findAll({
            include: [{ model: Cliente, as: 'cliente' }]
        });
        return sendResult(ordenes, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching orders' });
    }
}

const create = async (req, res) => {
    try {
        const orden = req.body;
        console.log(orden);
        const ordenCreated = await repository.create(orden);
        return sendResult(ordenCreated, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating order' });
    }
}

const findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.findOne({
            where: { id },
            include: [{ model: Cliente, as: 'cliente' }]
        });
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching order' });
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.remove(id);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting order' });
    }
}

const update = async (req, res) => {
    try {
        const orden = req.body;
        const result = await repository.update(orden);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating order' });
    }
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(404).json({ message: 'Orden no encontrada.' });
}

const controller = { findAll, create, findOne, remove, update };

export default controller;
