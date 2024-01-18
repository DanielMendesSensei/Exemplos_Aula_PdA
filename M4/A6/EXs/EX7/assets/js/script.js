// CHAMANDO O ARQUIVO MODULO COMO UM MÓDULO
const saudacao = require('./modulo');
// OUTRA FORMA DE IMPORTAR
// import { saudacao } from './modulo';


const mensagem = saudacao('Usuário');
console.log(mensagem);