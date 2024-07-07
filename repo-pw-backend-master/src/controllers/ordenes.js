import repository from '../repositories/ordenes.js'

const findAll = (req, res) => {

    const ordenes = repository.findAll();

    return sendResult(ordenes, res);
}

const create = (req, res) => {
    const orden = req.body;
    console.log(orden)
    const ordenCreated = repository.create(orden);

    return sendResult(ordenCreated, res);
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
    const orden = req.body;

    const result = repository.update(orden);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Orden no encontrado.'});
}

const controller = { findAll, create, findOne, remove, update }

export default controller;