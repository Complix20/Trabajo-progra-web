import model from '../models/productos.js';
import RepositoryBase from '../repositories/repositorio.js';

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
    try {
        const productos = await repository.findAll();
        return sendResult(productos, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching products' });
    }
}

const create = async (req, res) => {
    try {
        const producto = req.body;
        const productoCreated = await repository.create(producto);
        return sendResult(productoCreated, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating product' });
    }
}

const findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.findOne(id);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching product' });
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.remove(id);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting product' });
    }
}

const update = async (req, res) => {
    try {
        const producto = req.body;
        const result = await repository.update(producto);
        return sendResult(result, res);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating product' });
    }
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(404).json({ message: 'Producto no encontrado.' });
}

const controller = { findAll, create, findOne, remove, update };

export default controller;
