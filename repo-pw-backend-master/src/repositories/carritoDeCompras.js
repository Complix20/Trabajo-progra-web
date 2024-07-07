import model from '../models/carritoDeCompras.js'

let carritosDeCompras = [...model];

const findAll = () => {
    return carritosDeCompras;
}

const create = (carritoDeCompras) => {
    carritosDeCompras.push(carritoDeCompras);

    return carritoDeCompras;
}

const findOne = (id) => {
    const result = carritosDeCompras.find(x => x.Id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = carritosDeCompras.findIndex(item => item.Id == id);

    if (index > -1) {
        carritosDeCompras.splice(index,1);
        return true;
    } else return false;
}

const update = (carritoDeCompras) => {
    const index = carritosDeCompras.findIndex(item => item.Id == carritoDeCompras.id);

    if (index > -1) {
        carritosDeCompras[index] = carritoDeCompras;
        return carritoDeCompras;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;