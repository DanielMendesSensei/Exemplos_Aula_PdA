const TITLES = {
    title: "Exemplos de Aula PdA",
    home: "&lt;Seja bem vindo aos Exemplos de Aula da Programadores do Amanhã!/&gt",
    subtitle: "Navegue pelos módulos e suas aulas para encontrar os exemplos e atividades feitas em sala",
    M0: "M0",
    M1: "M1",
    M2: "M2",
    M3: "M3",
    M4: "M4",
    M5: "M5"
}

const MXS = {
    M0 : "/Exemplos_Aula_PdA/M0/M0.html",
    M1 : "/Exemplos_Aula_PdA/M1/M1.html",
    M2 : "/Exemplos_Aula_PdA/M2/M2.html",
    M3 : "/Exemplos_Aula_PdA/M3/M3.html",
    M4 : "/Exemplos_Aula_PdA/M4/M4.html",
    M5 : "/Exemplos_Aula_PdA/M5/M5.html"
}

const BODY = `<h1> ${TITLES.home} </h1>\
            <h2> ${TITLES.subtitle} </h2>\
            <nav id='links' class='links'>\
                <ul> \
                    <li><a class="m" href='${MXS.M0}'>${TITLES.M0}</a></li>\
                    <li><a class="m" href='${MXS.M1}'>${TITLES.M1}</a></li>\
                    <li><a class="m" href='${MXS.M2}'>${TITLES.M2}</a></li>\
                    <li><a class="m" href='${MXS.M3}'>${TITLES.M3}</a></li>\
                    <li><a class="m" href='${MXS.M4}'>${TITLES.M4}</a></li>\
                    <li><a class="m" href='${MXS.M5}'>${TITLES.M5}</a></li>\
                </ul>\
            </nav>`

// Função para carregar e compilar o template base
function carregarTemplateBase() {
    const templatePath = '../templates/base-template.html'
    // Carrega o conteúdo do arquivo base-template.html usando AJAX
    fetch(templatePath)
        .then(response => response.text())
        .then(template => {
            // Compile o template base usando Handlebars
            Handlebars.templates = Handlebars.templates || {};
            Handlebars.templates['base-template'] = Handlebars.compile(template);
            // Chame a função para renderizar a página
            renderizarPagina();
        })
        .catch(error => {
            console.error('Erro ao carregar o template:', error);
        });
}

// Função para renderizar a página
function renderizarPagina() {
    // Dados para a página
    const data = {
        Title: TITLES.title,
        body: BODY,

    };

    // Verifica se o template está pronto antes de renderizar
    if (Handlebars.templates['base-template']) {
        // Renderize a página
        
        // document.body.innerHTML = Handlebars.templates['base-template'](data);
        document.documentElement.innerHTML = Handlebars.templates['base-template'](data);

    } else {
        console.error('Erro: O template base não foi carregado ou compilado ainda.');
    }
}

// Chame a função para carregar e compilar o template base quando a página for carregada
carregarTemplateBase();

document.addEventListener("DOMContentLoaded", ()=>{
    const teste = document.getElementById('title')
    console.log(teste)

    const elementLinks = document.querySelectorAll('.m')
    for (let element of elementLinks){
        console.log(element.innerHTML)
    }
    // elementLinks.forEach(element => console.log(element.textContent))
    console.log(elementLinks)

})