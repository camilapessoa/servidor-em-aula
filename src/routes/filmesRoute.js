//rotas específicas par os filmes que queremos
//express é o primeiro a ser chamado para criar rotas em API

const express = require("express")
const router = express.Router()
const controller = require("../controller/filmesController")

//função de rota, chamei a get que está no module exports que está em controller
router.get("/", controller.getAll)//chamou a função get all como se fosse um objeto

//exporta uma uma função router e encontra todas as outras (benefício do express)
module.exports = router 
