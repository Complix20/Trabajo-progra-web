import repository from '../repositories/clientesDirecciones.js'

const findAll = (req, res) => {

    const clientesDirecciones = repository.findAll();

    return sendResult(clientesDirecciones, res);
}

const create = (req, res) => {
    const clienteDireccion = req.body;
    console.log(clienteDireccion)
    const clienteDireccionCreated = repository.create(clienteDireccion);

    return sendResult(clienteDireccionCreated, res);
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
    const clienteDireccion = req.body;

    const result = repository.update(clienteDireccion);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Direccion de cliente no encontrada.'});
}

const controller = { findAll, create, findOne, remove, update }

export default controller;