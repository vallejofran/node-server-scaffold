import { Sequelize } from "sequelize";
import { config } from "../config/db-config.js";

const sequelizeConn = new Sequelize(
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

await sequelizeConn.authenticate();
export default sequelizeConn;
