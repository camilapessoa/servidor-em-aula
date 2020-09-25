//chamar o json e lista-lo
const filmes = require("../model/filmes.json")//url caminho que o require tem que fazer pra encontrar o json

//quando alguém chamar a função getAll, vou imprimir o status 200 ok
//e vai enviar send os filmes
//const getAll pode ser qualquer nome

const getAll = (req, res) =>{
  console.log(req.url)
  res.status(200).send(filmes)
}

//consegue exportar a função getAll para utilizar em outro arquivo
module.exports = {
  getAll
}