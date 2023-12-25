import express, { json } from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

import mySqlConnection from "./database/mysql-conn.js";
import sequelizeConnection from "./database/sequelize-conn.js";
import mongoConnection from "./database/mongo-conn.js";
import {
  MongoConnError,
  SequelizeConnError,
  MySqlConnError,
} from "./class/error-factory.js";
import routes from "./routes/index.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Conectar a base de datos
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  async conectarDB() {
    try {
      // await mySqlConnection.connect();
      // await sequelizeConnection.connect();
      mongoConnection();
    } catch (error) {
      if (error instanceof MongoConnError) {
        console.error("Error en la conexion a MongoDB _>".brightRed, error);
        process.exit(0);
      }
      if (error instanceof SequelizeConnError) {
        console.error(
          "Error en la conexion a BBDD con Sequelize _>".brightRed,
          error
        );
        process.exit(0);
      }
      if (error instanceof MySqlConnError) {
        console.error(
          "Error en la conexion a BBDD con MySql _>".brightRed,
          error
        );
        process.exit(0);
      }
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(json());

    // Directorio Público
    // this.app.use( express.static('public') );

    // Fileupload - Carga de archivos
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }

  routes() {
    this.app.use("/", routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`.brightGreen);
    });
  }
}

export default Server;
