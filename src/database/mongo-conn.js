import mongoose from "mongoose";
import { MongoConnError } from "../class/error-factory.js";

const mongoConnection = () => {
  try {
    mongoose.connect(process.env.MONGODB_CNN);
    console.log(`Conectado a ${process.env.MONGODB_CNN}`.brightGreen);
  } catch (error) {
    throw new MongoConnError(error);
  }
};

export default mongoConnection;
