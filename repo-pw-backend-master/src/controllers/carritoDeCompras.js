import repository from '../repositories/carritoDeCompras.js'

const findAll = (req, res) => {

    const carritoDeCompras = repository.findAll();

    return sendResult(carritoDeCompras, res);
}

const create = (req, res) => {
    const carritoDeCompra = req.body;
    console.log(carritoDeCompra)
    const carritoDeCompraCreated = repository.create(carritoDeCompra);

    return sendResult(carritoDeCompraCreated, res);
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
    const carritoDeCompra = req.body;

    const result = repository.update(carritoDeCompra);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Carrito no encontrado.'});
}

const controller = { findAll, create, findOne, remove, update }

export default controller;