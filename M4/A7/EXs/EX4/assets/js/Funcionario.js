const Pessoa = require("./Pessoa");

class Funcionario extends Pessoa{
    constructor(nome, cpf, idade, cargo){
        super(nome, cpf, idade);
        this.cargo = cargo;
        this.id = Math.random();
    }

    exibindoFuncionario(){
        console.log({
            nome: this.nome, 
            cpf: this.cpf,
            idade: this.idade,
            cargo: this.cargo,
            id: this.id
        })
    }
}

module.exports = Funcionario;