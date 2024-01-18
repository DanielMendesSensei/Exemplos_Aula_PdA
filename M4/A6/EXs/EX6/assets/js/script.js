// SERVIDOR LOCAL COM EXPRESS
const express = require('express')
const app = express()
const port = 8001


app.get("/", function(req, res){
    res.send("Olá mundo!")
})

app.get("/sobre", function(req, res){
    res.send("Página Sobre")
})

app.get("/home", (req, res)=>{
    res.send("TESTE")
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
