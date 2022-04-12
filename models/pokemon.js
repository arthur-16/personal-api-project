import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Pokemon = new Schema({
  name: { type: String },
  id: { type: Number },
  type: { type: String },
  image: { type: String },
  height: { type: Number },
  weight: { type: Number }
})

export default mongoose.model("pokemon", Pokemon)