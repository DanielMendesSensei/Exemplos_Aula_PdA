// compile the template
var template = "<b>{{doesWhat}}</b>";
// var template = document.getElementsByClassName("test")
// console.log(template)
var compile = Handlebars.compile(template);
// execute the compiled template and print the output to the console
console.log(compile({ doesWhat: "rocks!" }));