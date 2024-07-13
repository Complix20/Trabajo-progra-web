import model from '../models/clientes.js';
import Usuario from '../models/usuarios.js';
import RepositoryBase from '../repositories/repositorio.js';

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
    try {
        const clientes = await repository.findAll({
            include: [{ model: Usuario, as: 'usuario' }]
        });
        return sendResult(clientes, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching clients' });
    }
}

const create = async (req, res) => {
    try {
        const cliente = req.body;
        console.log(cliente);
        const clienteCreated = await repository.create(cliente);
        return sendResult(clienteCreated, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating client' });
    }
}

const findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.findOne({
            where: { id },
            include: [{ model: Usuario, as: 'usuario' }]
        });
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching client' });
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.remove(id);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting client' });
    }
}

const update = async (req, res) => {
    try {
        const cliente = req.body;
        const result = await repository.update(cliente);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating client' });
    }
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(404).json({ message: 'Cliente no encontrado.' });
}

const controller = { findAll, create, findOne, remove, update };

export default controller;
