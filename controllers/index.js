const medecin = require("./medecin")
const post = require('./post')

module.exports = {
    ...medecin,
    ...post
}