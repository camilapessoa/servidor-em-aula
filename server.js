//const express = require('express') //chama primeiro express pq já tem funcao get
//const app = express()//executando o express dentro da const app

//agora só vai fazer a conexão com a porta
const app = require("./src/app") //requisita o  caminho do arquivo direto

// dentro de app, vou chamar uma função get
/* app.get ('/', function (req, res) {//nessa função de get, vou escrever uma rota. A rota /
  res.send("Olá, Mundo")

}) */

const PORT = 8080

app.listen(PORT, function(){
  console.log("O nosso app esta rodando na porta " + PORT)
})


//app.listen(8080) //chama porta

//get junto com evento de chamar porta
//boa prática: quando há um projeto maior, deixamos o server só para chamada de porta
//server só para subir o servidor

