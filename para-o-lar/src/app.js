const express = require('express')
const app = express()

//rotas
const ghibli = require("./routes/ghibliRoute")
app.use("/ghibli", ghibli)

const filmes = require("./routes/filmesRoute")
app.use("/filmes", filmes)

const estados = require("./routes/estadosRoute")
app.use("/estados", estados)

module.exports = app