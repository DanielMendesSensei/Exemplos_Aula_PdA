class Carro{
    // cor = null // Podemos criar um atributo para o carro fora do construtor dessa forma, sem precisar usar let, var ou const
    constructor(ma, mo, c){ //Método construtor é automaticamente chamado quando eu instanciar um objeto dessa classe
        // Podemos criar um atributo também dentro do construtor O This serve de referência a classe que você declarou, sem o this o cor seria apenas um declaração do construtor e não da classe
        this.marca = ma 
        this.modelo = mo
        this.cor = c 
        this.ligado = false
        this.km = 0
        this.comb = 10
        
    }
    info(){
        console.log("Marca......: " + this.marca)
        console.log("Modelo.....: " + this.modelo)
        console.log("Cor........: " + this.cor)
        console.log("Ligado.....: " + (this.ligado ? "Sim" : "Não")) //Operação ternário ? :
        console.log("KM.........: " + this.km)
        console.log("Combustível: " + this.comb + "%")
        console.log("--------------------------------")
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
    // ligaDesliga(ld){
    //     this.ligado = ld
    // }
}   

let Carro1 = new Carro("Honda", "HRV", "Vermelho") // Comportamentos diferentes
let Carro2 = new Carro("Volksvagen", "Golf", "Verde") // O New cria um prototype, podendo criar atributos que não existem na classe Carro original
let Carro3 = new Carro("GM", "Camaro", "Preto")
let Carro4 = new Carro("FORD", "Mustang", "Azul")

Carro1.ligar()
Carro3.ligar()


Carro1.info()
Carro2.info()
Carro3.info()
Carro4.info()

