const express = require('express')
const cors = require("cors")
const {createConnection, EntitySchema} = require("typeorm")

const { getMedecins, getMedecin, addMedecin, getPost, addPost, getPosts } = require("./controllers")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/medecin", getMedecins)
app.get("/medecin/:id", getMedecin)
app.post("/medecin", addMedecin)

app.get("/post", getPosts)
app.get("/post/:id", getPost)
app.post("/post", addPost)

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "nabil",
    password: "heyheyboi",
    database: "Mobile",
    synchronize: true,
    logging: false,
    entities: [
        new EntitySchema(require("./entities/medecin.json")),
        new EntitySchema(require("./entities/post.json"))
    ]
})
.then(() => {
    app.listen(1337, () => {
        console.log("server started at localhost:1337.")
    })
})
.catch(e => {
    console.error(`couldn't connect to db:\n${e.message}`)
})