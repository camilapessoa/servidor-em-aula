//lugar para indicar as rotas de configuração de requisição

const express = require("express")
const app = express()

//chama filmes da rotas e envia para o nosso servidor
const filmes = require("./routes/filmesRoute")

app.use("/filmes", filmes)//não é pasta, é como vai entrar na url

module.exports = app //exportando o app como um todo, não como uma função
