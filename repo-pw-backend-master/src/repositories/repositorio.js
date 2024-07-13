class RepositoryBase {
    constructor(model) {
        this.model = model;
    }

    findAll = async (options = {}) => {
        try {
            const res = await this.model.findAll(options);
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    create = async (payload) => {
        try {
            const res = await this.model.create(payload);
            return res;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    findOne = async (options = {}) => {
        try {
            const result = await this.model.findOne(options);
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    remove = async (id) => {
        try {
            await this.model.destroy({
                where: { id }
            });
            return true;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    update = async (payload) => {
        try {
            const { id } = payload;
            const result = await this.model.update(payload, { where: { id } });
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default RepositoryBase;
