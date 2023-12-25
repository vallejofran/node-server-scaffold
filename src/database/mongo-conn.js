import mongoose from "mongoose";
import { MongoConnError } from "../class/error-factory.js";

const mongoConnection = () => {
  try {
    mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`Conectado a ${process.env.MONGODB_CNN}`.brightGreen);
  } catch (error) {
    throw new MongoConnError(error);
  }
};

export default mongoConnection;
