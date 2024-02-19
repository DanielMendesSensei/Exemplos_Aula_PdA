// cammelCase -> nomeUsuario
// snack_case -> senha_usuario

// entrada de dados -> quando esperamos um dado digitado pelo usuario
// processamento de dados -> calculo| execucao 
// saida de dados -> resultado esperado pelo cliente

// fazendo miojo 
// preciso que o usuario me passe a panela, a agua e o miojo;
// na entrada de dados ter panela, agua e miojo;

// A saida do dado é pelo console
// calcule quando é 2 + 2 e retorne pelo console o resultado

// receba do usuario 2 numeros, faca a somar do dois e retorne
// no console o resultado 
// qual problema ? Somar os dois valores
// quais sao as entradas? atraves do prompt receber valor1 e valor2
// quao a saida? apresentar resultado no console
// etapas intermediarias? transformar strings em numbers


// entrada
let valor1 = prompt("digite o primeiro valor");
let valor2 = prompt("digite o segundo valor");


// etapa intermediaria 
valor1 = parseInt(valor1);
valor2 = parseInt(valor2);

// saida
console.log(valor1+valor2);

