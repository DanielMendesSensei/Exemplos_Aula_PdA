const express = require('express')
const app = express()
const port = 3000
const pessoaRouter = require("./src/routes/PessoaRouter") // Fique atento aqui com o caminho

app.use(express.json());
app.use(pessoaRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})