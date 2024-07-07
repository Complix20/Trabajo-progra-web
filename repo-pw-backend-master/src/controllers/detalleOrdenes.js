import repository from '../repositories/detalleOrdenes.js'

const findAll = (req, res) => {

    const detalleOrdenes = repository.findAll();

    return sendResult(detalleOrdenes, res);
}

const create = (req, res) => {
    const detalleOrden = req.body;
    console.log(detalleOrden)
    const detalleOrdenCreated = repository.create(detalleOrden);

    return sendResult(detalleOrdenCreated, res);
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
    const detalleOrden = req.body;

    const result = repository.update(detalleOrden);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Detalle de orden no encontrado.'});
}

const controller = { findAll, create, findOne, remove, update }

export default controller;