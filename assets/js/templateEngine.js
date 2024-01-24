// TEMPLATE ENGINE - Handlebars - Só toque aqui se caso você saiba mexer

/* Para utilizar o Handlebars, precisamos armazenar como objeto os valores (strings)
   Instanciar em variáveis o script HTML já passando os valores dos objetos declarados acima
        Caso o elemento do DOM esteja como class, favor adicionar no HTML um ID e chama-lo aqui 
        com getElementByID("Nome do ID"), para evitar conflitos com css ou o próprio template engine
   Complilar com handlebars essa instância
   Instanciar essa complilação passando como parâmetro o objeto declarado inicialmente
   Consulte a implementação anterior a qualquer momento
*/

// ---------------------------------------------------

    /* OBJECT VARIABLES */
const TITLES = {
    home: "Bem vindo! Navegue pelos módulos e aulas para encontrar os exemplos feitos em aula",
    M1: "",
    M2: "",
    M3: " "
}

const MXs = {
    M0 : "/Exemplos_Aula_PdA/M0/M0.html",
    M1 : "/Exemplos_Aula_PdA/M1/M1.html",
    M2 : "/Exemplos_Aula_PdA/M2/M2.html",
    M3 : "/Exemplos_Aula_PdA/M3/M3.html",
    M4 : "/Exemplos_Aula_PdA/M4/M4.html"
}

    /* INSTANCIAS */
const passaDadosTitles = '<h1> {{home}} </h1>\
                        <nav id="links" class="links"></nav>'

const passaDadosPaths = "<ul> \
                            <li><a href='{{M0}}'>M0</a></li>\
                            <li><a href='{{M1}}'>M1</a></li>\
                            <li><a href='{{M2}}'>M2</a></li>\
                            <li><a href='{{M3}}'>M3</a></li>\
                            <li><a href='{{M4}}'>M4</a></li>\
                        </ul>"

    /* COMPILADOR */
const templateTitles = Handlebars.compile(passaDadosTitles)
const title = templateTitles(TITLES)

const templatePaths = Handlebars.compile(passaDadosPaths)
const path = templatePaths(MXs)

    /* RENDERIZADOR */
document.getElementById("title").innerHTML = title
document.getElementById("links").innerHTML = path