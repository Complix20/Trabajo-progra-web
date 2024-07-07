import repository from '../repositories/clientes.js'

const findAll = (req, res) => {

    const clientes = repository.findAll();

    return sendResult(clientes, res);
}

const create = (req, res) => {
    const cliente = req.body;
    console.log(cliente)
    const clienteCreated = repository.create(cliente);

    return sendResult(clienteCreated, res);
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
    const cliente = req.body;

    const result = repository.update(cliente);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Cliente no encontrado.'});
}

const controller = { findAll, create, findOne, remove, update }

export default controller;