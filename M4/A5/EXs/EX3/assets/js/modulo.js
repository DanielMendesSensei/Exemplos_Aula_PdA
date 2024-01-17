// COMO EXPORTAR UM SCRIPT COMO MÓDULO
// modulo.js
function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo ao meu módulo.`;
  }
  
module.exports = saudacao;