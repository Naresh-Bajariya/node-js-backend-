import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // Establish connection
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    // Access the connection instance and log it
    //  const connectionInstance = mongoose.connection;
    console.log(
      `Mongodb Connected to ${DB_NAME} ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb Connection Error ", error);
    process.exit(1);
  }
};

export default connectDB;
