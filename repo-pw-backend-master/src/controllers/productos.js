import repository from '../repositories/productos.js'

const findAll = (req, res) => {

    const productos = repository.findAll();

    return sendResult(productos, res);
}

const create = (req, res) => {
    const producto = req.body;
    console.log(producto)
    const productoCreated = repository.create(producto);

    return sendResult(productoCreated, res);
}

const findOne = (req, res) => {

    const id = req.params.id;

    const result = repository.findOne(id);

    return sendResult(result, res);
}

const remove = (req, res) => {
    const id = req.params.id;

    const result = repository.remove(id);

    return sendResult(result, res);
}

const update = (req, res) => {
    const producto = req.body;

    const result = repository.update(producto);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Producto no encontrado.'});
}

const controller = { findAll, create, findOne, remove, update }

export default controller;