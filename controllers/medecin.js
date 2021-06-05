const {getRepository} = require("typeorm")

function getMedecins(req, res) {
    getRepository("Medecin").find()
    .then(medecins => {
        res.status(200).send(medecins)
    })
    .catch(error => {
        res.status(500).send({ message: error.message })
    })
}

function getMedecin(req, res) {
    getRepository("Medecin").find({ id: req.params.id })
    .then(medecin => {
        res.status(200).send(medecin)
    })
    .catch(error => {
        res.status(404).send({ message: error.message })
    })
}

function addMedecin(req, res) {
    const medecin = getRepository("Medecin").create(req.body)
    getRepository("Medecin").save(medecin)
    .then(() => {
        res.status(200).send({ message: "medecin cree avec succes.", medecin })
    })
    .catch(err => {
        res.status(400).send({ message: err.message })
    })
}

module.exports = {
    getMedecin, 
    getMedecins,
    addMedecin
}