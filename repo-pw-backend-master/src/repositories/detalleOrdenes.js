import model from '../models/detalleOrdenes.js'

let detalleOrdenes = [...model];

const findAll = () => {
    return detalleOrdenes;
}

const create = (detalleOrden) => {
    detalleOrdenes.push(detalleOrden);

    return detalleOrden;
}

const findOne = (id) => {
    const result = detalleOrdenes.find(x => x.Id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = detalleOrdenes.findIndex(item => item.Id == id);

    if (index > -1) {
        detalleOrdenes.splice(index,1);
        return true;
    } else return false;
}

const update = (detalleOrden) => {
    const index = detalleOrdenes.findIndex(item => item.Id == detalleOrden.id);

    if (index > -1) {
        detalleOrdenes[index] = detalleOrden;
        return detalleOrden;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;