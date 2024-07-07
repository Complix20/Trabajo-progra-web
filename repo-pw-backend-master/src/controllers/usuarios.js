import repository from '../repositories/usuarios.js'

const findAll = (req, res) => {

    const usuarios = repository.findAll();

    return sendResult(usuarios, res);
}

const create = (req, res) => {
    const usuario = req.body;
    console.log(usuario)
    const usuarioCreated = repository.create(usuario);

    return sendResult(usuarioCreated, res);
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
    const usuario = req.body;

    const result = repository.update(usuario);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Usuario no encontrado.'});
}

const controller = { findAll, create, findOne, remove, update }

export default controller;