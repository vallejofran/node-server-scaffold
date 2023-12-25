import { DataTypes } from "sequelize";
import sequelizeConn from "../database/sequelize-conn.js";

const UserExample = sequelizeConn.connection.define(
  "crwmembr",
  {
    id_CRWMEMBR: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      // field: 'id_CRWMEMBR', // Nombre personalizado para la columna de clave primaria
    },
    CRE_PRIMKEY: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    OCREW: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LASTNAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FIRSTNAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    MIDDLENAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    COMPANYNBR: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PASSWORD: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    AUX_PASSWORD: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    BLOCK: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    ATTEMPTS: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ACTIVE: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    DNI: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LASTNAME2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EXTERNAL: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    remember_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default UserExample;
