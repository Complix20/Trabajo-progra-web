import model from '../models/usuarios.js';
import Rol from '../models/roles.js';
import RepositoryBase from '../repositories/repositorio.js';

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
    try {
        const usuarios = await repository.findAll({
            include: [{ model: Rol, as: 'rol' }]
        });
        return sendResult(usuarios, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching users' });
    }
}

const create = async (req, res) => {
    try {
        const usuario = req.body;
        console.log(usuario);
        const usuarioCreated = await repository.create(usuario);
        return sendResult(usuarioCreated, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating user' });
    }
}

const findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.findOne({
            where: { id },
            include: [{ model: Rol, as: 'rol' }]
        });
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching user' });
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.remove(id);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting user' });
    }
}

const update = async (req, res) => {
    try {
        const usuario = req.body;
        const result = await repository.update(usuario);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating user' });
    }
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(404).json({ message: 'Usuario no encontrado.' });
}

const controller = { findAll, create, findOne, remove, update };

export default controller;
