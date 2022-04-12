import connection from "./db/connection.js"
import routes from "./routes/index.js"
import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api", routes)

connection.on("connected", () => {
  console.clear()
  console.log("Connected to MongoDB!")
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production" ? 
      console.log(`Working on ${PORT}`) :
      console.log(`Server is running in dev on http://localhost:${PORT}`)
  })
})