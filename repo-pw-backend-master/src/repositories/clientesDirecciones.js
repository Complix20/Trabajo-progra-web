import model from '../models/clientesDirecciones.js'

let clientesDirecciones = [...model];

const findAll = () => {
    return clientesDirecciones;
}

const create = (clienteDirecciones) => {
    clientesDirecciones.push(clienteDirecciones);

    return clienteDirecciones;
}

const findOne = (id) => {
    const result = clientesDirecciones.find(x => x.id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = clientesDirecciones.findIndex(item => item.id == id);

    if (index > -1) {
        clientesDirecciones.splice(index,1);
        return true;
    } else return false;
}

const update = (clienteDirecciones) => {
    const index = clientesDirecciones.findIndex(item => item.id == clienteDirecciones.id);

    if (index > -1) {
        clientesDirecciones[index] = clienteDirecciones;
        return clienteDirecciones;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;