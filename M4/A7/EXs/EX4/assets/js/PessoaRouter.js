const express = require("express");
const Pessoa = require("../models/Pessoa");
const Funcionario = require("../models/Funcionario");
const router = express.Router();

router.post("/newPessoa", (req,res)=> {
    const { nome } = req.body;
    let pessoa = new Pessoa();
    pessoa.inserirNome(nome);
    pessoa.mostrarNome();
    return res.json({ lista: pessoa.listaNomes});
});

router.post("/newFuncionario", (req,res)=> {
    const { nome, cpf, idade, cargo } = req.body;
    let funcionario = new Funcionario(nome, cpf, idade, cargo);
    funcionario.exibindoFuncionario();
    return res.json({ funcionario: funcionario.id})
})

module.exports = router;