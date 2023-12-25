import Controller from "./controller.js";
import models from "../models/index.js";
import CRUDService from "../services/crud-service.js";

function newCRUDService(model) {
  function toPascalCase(str) {
    return str
      .replace(/[-_]+(.)?/g, (_, letter) =>
        letter ? letter.toUpperCase() : ""
      )
      .replace(/^[a-z]/, (firstLetter) => firstLetter.toUpperCase());
  }

  model = toPascalCase(model);
  const Model = models[model];
  if (!Model) throw Error("The model " + model + " was not found");

  return new CRUDService(Model);
}

const controller = new Controller();

controller.name = "GenericCrudController";
controller.debug = true;

controller.get = async function (req, res) {
  await this.handleRequest(req, res, async () => {
    const model = req.params.model;
    const query =
      req.query && req.query.query ? JSON.parse(req.query.query) : {};

    this.log("get", { model, query });

    const crudService = newCRUDService(model);
    const items = await crudService.get(query);

    this.log("get", { items });

    res.send(items);
  });
};

controller.getById = async function (req, res) {
  await this.handleRequest(req, res, async () => {
    const { model, id } = req.params;

    this.log("getById", { model, id });

    const crudService = newCRUDService(model);
    const items = await crudService.getById(id);

    this.log("getById", { items });

    res.send(items);
  });
};

controller.create = async function (req, res) {
  await this.handleRequest(req, res, async () => {
    const model = req.params.model;
    const userData = req.body;

    this.log("create", { model, userData });

    const crudService = newCRUDService(model);
    const newUser = await crudService.create(userData);

    this.log("create", { newUser });

    res.send(newUser);
  });
};

controller.updateById = async function (req, res) {
  await this.handleRequest(req, res, async () => {
    const { model, id } = req.params;
    const userData = req.body;

    this.log("updateById", { model, userData });

    const crudService = newCRUDService(model);
    const updatedUser = await crudService.updateById(id, userData);

    this.log("updateById", { updatedUser });

    res.send(updatedUser);
  });
};

controller.deleteById = async function (req, res) {
  await this.handleRequest(req, res, async () => {
    const { model, id } = req.params;

    this.log("deleteById", { model, id });

    const crudService = newCRUDService(model);
    const deletedUser = await crudService.deleteById(id);

    this.log("deleteById", { deletedUser });

    res.send(deletedUser);
  });
};

export default controller;
