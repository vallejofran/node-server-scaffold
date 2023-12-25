const Sequelize = require("sequelize");
const config = require("../config/db-config");
const { SequelizeConnError } = require("../class/error-factory");
class SequelizeConn {
  constructor() {
    if (process.env.NODE_ENV === "production")
      this.connection = new Sequelize(
        config.production.database,
        config.production.username,
        config.production.password,
        {
          host: config.production.host,
          dialect: config.production.dialect,
          // logging: false
          pool: {
            max: 5,
            min: 1,
            idle: 10000,
          },
        }
      );
    else
      this.connection = new Sequelize(
        config.development.database,
        config.development.username,
        config.development.password,
        {
          host: config.development.host,
          dialect: config.development.dialect,
          // logging: false
          pool: {
            max: 5,
            min: 1,
            idle: 10000,
          },
        }
      );
  }

  async connect() {
    try {
      await this.connection.authenticate();
      console.log(`Conectado a la base de datos desde Sequelize`.brightGreen);
    } catch (error) {
      throw new SequelizeConnError(error);
    }
  }

  close() {
    if (this.connection) {
      this.connection.close();
      this.connection = null;
      console.log("Cerrando la conexion a la base de datos".brightGreen);
    }
  }
}

module.exports = new SequelizeConn();
