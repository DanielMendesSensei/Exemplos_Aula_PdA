// CRIANDO SERVIDOR LOCAL DA FORMA BRUTA SEM EXPRESS
const http = require('http');
const url = require('url');

// Função para lidar com requisições na rota '/'
function handleHome(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Rota Home');
  response.end();
}

// Função para lidar com requisições na rota '/sobre'
function handleSobre(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Rota Sobre');
  response.end();
}

// Função para lidar com requisições na rota desconhecida
function handleNotFound(request, response) {
  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.write('Rota não encontrada');
  response.end();
}

// Cria um servidor HTTP
const server = http.createServer((request, response) => {
  // Obtém o caminho da URL
  const path = url.parse(request.url).pathname;

  // Roteamento manual
  if (path === '/') {
    handleHome(request, response);
  } else if (path === '/sobre') {
    handleSobre(request, response);
  } else {
    handleNotFound(request, response);
  }
});

// Define a porta do servidor e inicia
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});