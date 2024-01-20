// compile the template
// var template = "<b>{{doesWhat}}</b>";
// var template = document.getElementsByClassName("test")
// console.log(template)
// var compile = Handlebars.compile(template);
// execute the compiled template and print the output to the console
// console.log(compile({ doesWhat: "rocks!" }));
// console.log(typeof source)
// var source = document.getElementById("meu-template").innerHTML;
// var template = Handlebars.compile(source);
// console.log(template)
// var html = template(dados);

// TEMPLATE ENGINE
/* Para utilizar o Handlebars, precisamos armazenar como objeto os valores (strings)
   Instanciar em variáveis o script HTML já passando os valores dos objetos declarados acima
   Complilar com handlebars essa instância
   Instanciar essa complilação passando como parâmetro o objeto declarado inicialmente*/

// -------------
const titles = {
    home: "Bem vindo! Navegue pelos módulos e aulas para encontrar os exemplos feitos em aula",
    M1: "",
    M2: ""
}

var passaDadosTitles = '<h1> {{home}} </h1>\
                        <nav id="links" class="links"></nav>'
var templateTitles = Handlebars.compile(passaDadosTitles)
var title = templateTitles(titles)

// RENDERIZADOR
document.getElementById("title").innerHTML = title



// ---------------
   /* PATH VARIABLES */
const MXs = {
    M0 : "/Exemplos_Aula_PdA/M0/M0.html",
    M1 : "/Exemplos_Aula_PdA/M1/M1.html",
    M2 : "/Exemplos_Aula_PdA/M2/M2.html",
    M3 : "/Exemplos_Aula_PdA/M3/M3.html",
    M4 : "/Exemplos_Aula_PdA/M4/M4.html"
}

const passaDadosPaths = "<ul> \
                            <li><a href='{{M0}}'>M0</a></li>\
                            <li><a href='{{M1}}'>M1</a></li>\
                            <li><a href='{{M2}}'>M2</a></li>\
                            <li><a href='{{M3}}'>M3</a></li>\
                            <li><a href='{{M4}}'>M4</a></li>\
                        </ul>"

const templatePaths = Handlebars.compile(passaDadosPaths)
// console.log(templatePaths)
const path = templatePaths(MXs)
// console.log(path)
document.getElementById("links").innerHTML = path





// LEGACY
var dados = { nome: "João", idade: 25 };
var passaDadosHTML = "<p>Nome: {{nome}}</p> <p>Idade: {{idade}}</p>"
var template = Handlebars.compile(passaDadosHTML);
var html = template(dados)

// RENDERIZADOR
document.getElementById("resultado").innerHTML = html;