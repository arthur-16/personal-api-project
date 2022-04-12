import { Router } from "express"
import pokemonRoutes from "./pokemon.js"


const router = Router()

router.get("/", (request, response) => {
  response.send("This is the api root!")
})

router.use("/", pokemonRoutes)



export default router