class Carro{
    // cor = null // Podemos criar um atributo para o carro fora do construtor dessa forma, sem precisar usar let, var ou const
    constructor(c){ //Método construtor é automaticamente chamado quando eu instanciar um objeto dessa classe
        // Podemos criar um atributo também dentro do construtor O This serve de referência a classe que você declarou, sem o this o cor seria apenas um declaração do construtor e não da classe
        this.cor = c 
        console.log("Olá! Sou um novo carro: " + this.cor)
    }
}

let Carro1 = new Carro("Vermelho") // Comportamentos diferentes
let Carro2 = new Carro("Verde") // O New cria um prototype, podendo criar atributos que não existem na classe Carro original
let Carro3 = new Carro("Azul")
let Carro4 = new Carro("Amarelo")