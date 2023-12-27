import Models from "../models/index.js";

class CRUDService {
  constructor(Model) {
    this.Model = Model;
  }

  get(query) {
    return this.Model.findAll(query);
  }

  getById(query) {
    return this.Model.findByPk(query);
  }

  async create(data) {
    const item = await this.Model.create(data);
    return item;
  }

  async updateById(id, data) {
    const item = await this.Model.findById(id);
    if (!item) throw Error("Item not found");
    Object.assign(item, data);
    return item.save();
  }

  async deleteById(id) {
    const where = {
      where: { id },
    };
    return this.Model.destroy(where);
  }
}

export default new CRUDService(Models["UsuarioSequelizeSchema"]);
