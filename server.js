const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');


const mySqlConnection = require('./database/mysql-conn');
const sequelizeConnection = require('./database/sequelize-conn');
const { mongoConnection } = require('./database/mongo-conn');


class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.paths = {
            example: '/api/example',
            userSequelizeExample: '/api/user-sequelize-example',
            userMongoExample: '/api/user-mongo-example',
        }

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
            await sequelizeConnection.connect();
            // await mongoConnection();

        } catch (error) {
            console.error('Error en la conexion a BBDD _>'.brightRed, error)
        }
    }


    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

        // Fileupload - Carga de archivos
        this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));

    }

    routes() {
        this.app.use( this.paths.example, require('./routes/example')); 
        this.app.use( this.paths.userSequelizeExample, require('./routes/user-sequelize-example')); 
        this.app.use( this.paths.userMongoExample, require('./routes/user-mongo-example')); 
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log();
            console.log('-------------------------------------------');
            console.log(`Servidor corriendo en puerto ${this.port}`.brightGreen );
        });
    }

}


module.exports = Server;
