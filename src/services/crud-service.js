class CRUDService {
  constructor(Model) {
    this.Model = Model;
  }

  get(query) {
    return this.Model.find(query);
  }

  getById(query) {
    return this.Model.findById(query);
  }

  create(data) {
    const item = new this.Model(data);
    return item.save();
  }

  async updateById(id, data) {
    const item = await this.Model.findById(id);
    if (!item) throw Error("Item not found");
    Object.assign(item, data);
    return item.save();
  }

  async deleteById(id) {
    return this.Model.findByIdAndDelete(id);
  }
}

module.exports = CRUDService;
