const mongoose = require('mongoose');


exports.mongoConnection = async() => {
    try {
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    
        console.log('Conectado a la base de datos desde Mongo'.brightGreen);

    } catch (error) {
        console.error('Error en la conexion de mongo _>'.brightRed, error);
        throw new Error(error);
    }
}

