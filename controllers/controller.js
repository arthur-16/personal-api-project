import Pokemon from "../models/pokemon.js"

export const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id);

    if (pokemon) {
      return res.json(pokemon);
    }
    res.status(400).json({ message: "Pokemon not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPokemon = async (req, res) => {
  try {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.status(201).json(pokemon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updatePokemon = async (req, res) => {
  const { id } = req.params;
  const pokemon = await Pokemon.findByIdAndUpdate(id, req.body);
  res.status(200).json(pokemon);
};

export const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pokemon.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Pokemon deleted!");
    }

    throw new Error("Pokemon not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};