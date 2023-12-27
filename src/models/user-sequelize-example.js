import { Sequelize, DataTypes } from "sequelize";
import sequelizeConn from "../database/sequelize-model-conn.js";

const UserExample = sequelizeConn.define(
  "UserExample",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    dni: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    // freezeTableName: true,
    tableName: "user_example",
    timestamps: false,
  }
);

await UserExample.sync();
export default UserExample;
