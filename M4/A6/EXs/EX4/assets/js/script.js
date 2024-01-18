// COMPARAÇÃO ENTRE USAR ASYNC/AWAIT E USAR THEN E CATH
// Funções que retornam promises
function operacaoAssincrona1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resultado da operação assíncrona 1')
        }, 1000); //DELAY DE 1s
    });
}

function operacaoAssincrona2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resultado da operação assíncrona 2');
        }, 1500)
    })
}
//------------------------------

// SEM ASYNC/AWAIT
function semAsyncAwait(){
    operacaoAssincrona1()
    .then((resultado1)=>{
        console.log(resultado1);
        return operacaoAssincrona2();
    })
    .then((resultado2) => {
        console.log(resultado2);
    })
    .catch((erro) => {
        console.error('Ocorreu um erro:', erro);
    });
}
semAsyncAwait();


// COM ASYNC/AWAIT
async function comAsyncAwait(){
    try {
        const resultado1 = await operacaoAssincrona1();
        console.log(resultado1);

        const resultado2 = await operacaoAssincrona2();
        console.log(resultado2)
    } catch (erro) {
        console.error('Batatinha', erro);
    }
}

comAsyncAwait();