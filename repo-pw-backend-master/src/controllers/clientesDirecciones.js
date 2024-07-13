import model from '../models/clientesDirecciones.js';
import Cliente from '../models/clientes.js';
import RepositoryBase from '../repositories/repositorio.js';

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
    try {
        const clientesDirecciones = await repository.findAll({
            include: [{ model: Cliente, as: 'cliente' }]
        });
        return sendResult(clientesDirecciones, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching client addresses' });
    }
}

const create = async (req, res) => {
    try {
        const clienteDireccion = req.body;
        console.log(clienteDireccion);
        const clienteDireccionCreated = await repository.create(clienteDireccion);
        return sendResult(clienteDireccionCreated, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating client address' });
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
        return res.status(500).json({ message: 'Error fetching client address' });
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.remove(id);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting client address' });
    }
}

const update = async (req, res) => {
    try {
        const clienteDireccion = req.body;
        const result = await repository.update(clienteDireccion);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating client address' });
    }
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(404).json({ message: 'Direccion de cliente no encontrada.' });
}

const controller = { findAll, create, findOne, remove, update };

export default controller;
