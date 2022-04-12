import { Router } from "express"
import * as controllers from "../controllers/controller.js"

const router = Router()

router.get("/pokemon", controllers.getPokemons);
router.get("/pokemon/:id", controllers.getPokemon);
router.post("/pokemon", controllers.createPokemon);
router.put("/pokemon/:id", controllers.updatePokemon);
router.delete("/pokemon/:id", controllers.deletePokemon);

export default router;