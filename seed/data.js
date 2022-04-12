import db from "../db/connection.js";
import Pokemon from "../models/pokemon.js";
import pokemon from "./pokemon.json" assert { type: "json" };


const seedData = async () => {
  // reset database
  // db.dropDatabase();

  // insert pokemon into database
  await Pokemon.insertMany(pokemon);

  // close db connection (done)
  db.close();
};

seedData();
