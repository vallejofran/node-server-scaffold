import { createConnection } from "mysql";
import { config } from "../config/db-config.js";
import {MySqlConnError} from "../class/error-factory.js";
class MysqlConnection {
  constructor() {
    if (process.env.NODE_ENV === "production") {
      this.connection = createConnection({
        host: config.production.host,
        user: config.production.username,
        password: config.production.password,
        database: config.production.database,
      });
    } else {
      this.connection = createConnection({
        host: config.development.host,
        user: config.development.username,
        password: config.development.password,
        database: config.development.database,
      });
    }
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.connection.connect((error) => {
        if (error) {
          reject(new MySqlConnError(error));
        } else {
          console.log(
            `Conectado a la base de datos ${this.connection.config.database}`
              .brightGreen
          );
          resolve(this.connection);
        }
      });
    });
  }

  disconnect() {
    this.connection.end();
    console.log(
      `Cerrando la conexion a la base de datos ${this.connection.config.database}`
        .brightGreen
    );
  }

  runQuery(sql) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

export default new MysqlConnection();
