import mongoModel from "./user-mongo-example.js";
import sequelizeModel from "./user-sequelize-example.js";

const models = {
  UsuarioSchema: mongoModel,
  UserExample: sequelizeModel,
};

export default models;
