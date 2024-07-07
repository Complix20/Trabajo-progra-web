import model from '../models/productos.js'

let productos = [...model];

const findAll = () => {
    return productos;
}

const create = (producto) => {
    productos.push(producto);

    return producto;
}

const findOne = (id) => {
    const result = productos.find(x => x.Id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = productos.findIndex(item => item.Id == id);

    if (index > -1) {
        productos.splice(index,1);
        return true;
    } else return false;
}

const update = (producto) => {
    const index = productos.findIndex(item => item.Id == producto.id);

    if (index > -1) {
        productos[index] = producto;
        return producto;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;