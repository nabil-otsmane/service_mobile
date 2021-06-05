const {getRepository} = require("typeorm")

function getPosts(req, res) {
    getRepository("Post").find()
    .then(post => {
        res.status(200).send(post)
    })
    .catch(error => {
        res.status(500).send({ message: error.message })
    })
}

function getPost(req, res) {
    getRepository("Post").find({ id: req.params.id })
    .then(post => {
        res.status(200).send(post)
    })
    .catch(error => {
        res.status(404).send({ message: error.message })
    })
}

function addPost(req, res) {
    const post = getRepository("Post").create(req.body)
    getRepository("Post").save(post)
    .then(() => {
        res.status(200).send({ ...post })
    })
    .catch(err => {
        res.status(400).send({ message: err.message })
    })
}

module.exports = {
    getPost, 
    getPosts,
    addPost
}