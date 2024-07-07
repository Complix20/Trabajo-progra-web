import model from '../models/ordenes.js'

let ordenes = [...model];

const findAll = () => {
    return ordenes;
}

const create = (orden) => {
    ordenes.push(orden);

    return orden;
}

const findOne = (id) => {
    const result = ordenes.find(x => x.Id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = ordenes.findIndex(item => item.Id == id);

    if (index > -1) {
        ordenes.splice(index,1);
        return true;
    } else return false;
}

const update = (orden) => {
    const index = ordenes.findIndex(item => item.Id == orden.id);

    if (index > -1) {
        ordenes[index] = orden;
        return orden;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;