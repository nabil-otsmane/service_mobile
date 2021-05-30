const dotenv = require("dotenv")
dotenv.config()

const express = require('express')
const cors = require("cors")
const {createConnection, EntitySchema} = require("typeorm")

const { getMedecins, getMedecin, addMedecin } = require("./controllers")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/medecin", getMedecins)

app.get("/medecin/:id", getMedecin)

app.post("/medecin", addMedecin)

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "nabil",
    password: "heyheyboi",
    database: "Mobile",
    synchronize: true,
    logging: true,
    entities: [ new EntitySchema(require("./entities/medecin.json"))]
})
.then(() => {
    app.listen(1337, () => {
        console.log("server started at localhost:1337.")
    })
})
.catch(e => {
    console.error(`couldn't connect to db:\n${e.message}`)
})