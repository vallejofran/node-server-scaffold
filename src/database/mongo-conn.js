const mongoose = require("mongoose");
const { MongoConnError } = require("../class/error-factory");

exports.mongoConnection = () => {
  try {
    mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("Conectado a la base de datos desde Mongo".brightGreen);
  } catch (error) {
    throw new MongoConnError(error);
  }
};
