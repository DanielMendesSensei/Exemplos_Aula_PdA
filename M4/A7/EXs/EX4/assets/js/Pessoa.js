class Pessoa{
    listaNomes = [];
    constructor(nome, cpf, idade){
      this.nome = nome;
      this.cpf = cpf;
      this.idade = idade;
    }

    inserirNome(){
       this.listaNomes.push(this.nome);
    }

    mostrarNome(){
        console.log("exibindo nome: " + this.listaNomes);
    }
}

module.exports = Pessoa;