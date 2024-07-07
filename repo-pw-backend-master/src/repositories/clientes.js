import model from '../models/clientes.js'

let clientes = [...model];

const findAll = () => {
    return clientes;
}

const create = (cliente) => {
    clientes.push(cliente);

    return cliente;
}

const findOne = (id) => {
    const result = clientes.find(x => x.Id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = clientes.findIndex(item => item.Id == id);

    if (index > -1) {
        clientes.splice(index,1);
        return true;
    } else return false;
}

const update = (cliente) => {
    const index = clientes.findIndex(item => item.Id == cliente.id);

    if (index > -1) {
        clientes[index] = cliente;
        return cliente;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;