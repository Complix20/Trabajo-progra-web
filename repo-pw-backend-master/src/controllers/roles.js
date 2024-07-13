import model from '../models/roles.js';
import RepositoryBase from '../repositories/repositorio.js';

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
    try {
        const roles = await repository.findAll();
        return sendResult(roles, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching roles' });
    }
}

const create = async (req, res) => {
    try {
        const rol = req.body;
        console.log(rol);
        const rolCreated = await repository.create(rol);
        return sendResult(rolCreated, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating role' });
    }
}

const findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.findOne({ where: { id } });
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching role' });
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.remove(id);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting role' });
    }
}

const update = async (req, res) => {
    try {
        const rol = req.body;
        const result = await repository.update(rol);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating role' });
    }
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(404).json({ message: 'Rol no encontrado.' });
}

const controller = { findAll, create, findOne, remove, update };

export default controller;
