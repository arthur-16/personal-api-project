import mongoose from "mongoose"

const connection =
  process.env.PROD_MONGODB || "mongodb://localhost:27017/pokemon"

  mongoose.set("returnOriginal", false);

  mongoose
  .connect(connection)
  .catch((error) =>
    console.error("Error connecting to MongoDB: ", error.message)
  );

  mongoose.connection.on("disconnected", () =>
  console.log(`Disconnected from MongoDB!`)
);

mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connection error: ${error}`)
);

  export default mongoose.connection;