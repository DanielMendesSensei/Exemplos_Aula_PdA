// USO SIMPLES DO FETCH
const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)

    // Usando só um console log ele retorna um monte de coisas da promisse, mas não os dados do personagem
    // console.log(result);
    
    // Criando um json para receber os dados da consulta, 
    // que no caso também é uma promisse, por isso mais um then para retornar de fato os dados
    .then(response => response.json())
    .then(jsonData => console.log(jsonData))
} 

// Chamando a função e passando o parâmetro id
fetchApi(1);
