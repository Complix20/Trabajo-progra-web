import model from '../models/usuarios.js'

let usuarios = [...model];

const findAll = () => {
    return usuarios;
}

const create = (usuario) => {
    usuarios.push(usuario);

    return usuario;
}

const findOne = (id) => {
    const result = usuarios.find(x => x.Id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = usuarios.findIndex(item => item.Id == id);

    if (index > -1) {
        usuarios.splice(index,1);
        return true;
    } else return false;
}

const update = (usuario) => {
    const index = usuarios.findIndex(item => item.Id == usuario.id);

    if (index > -1) {
        usuarios[index] = usuario;
        return usuario;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;