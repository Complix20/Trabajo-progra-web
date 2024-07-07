import repository from '../repositories/roles.js'

const findAll = (req, res) => {

    const roles = repository.findAll();

    return sendResult(roles, res);
}

const create = (req, res) => {
    const rol = req.body;
    console.log(rol)
    const rolCreated = repository.create(rol);

    return sendResult(rolCreated, res);
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
    const rol = req.body;

    const result = repository.update(rol);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Rol no encontrado.'});
}

const controller = { findAll, create, findOne, remove, update }

export default controller;