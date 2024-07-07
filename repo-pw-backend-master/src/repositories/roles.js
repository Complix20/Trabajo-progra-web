import model from '../models/roles.js'

let roles = [...model];

const findAll = () => {
    return roles;
}

const create = (rol) => {
    roles.push(rol);

    return rol;
}

const findOne = (id) => {
    const result = roles.find(x => x.Id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = roles.findIndex(item => item.Id == id);

    if (index > -1) {
        roles.splice(index,1);
        return true;
    } else return false;
}

const update = (rol) => {
    const index = roles.findIndex(item => item.Id == rol.id);

    if (index > -1) {
        roles[index] = rol;
        return rol;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;