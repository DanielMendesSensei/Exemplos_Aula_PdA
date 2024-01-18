// PROMESSAS
let falaPromessa = "Vou te comprar um carro de verdade!"
let falaFinal = "Vou te comprar um carro de verdade"

// CRIANDO A PROMISE
const promessa = new Promise((resolve, reject) => {
    if(falaPromessa !== falaFinal){
        reject("Não foi essa promessa :(")
    }else{
        resolve("Obrigado mãe! :)")
    }
})

// Chamando-a
promessa.then((resultado) => {
    console.log("Sucesso!", resultado)
})
.catch((erro) => {
    console.error("Error:", erro);
})