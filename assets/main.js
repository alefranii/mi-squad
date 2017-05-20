
function MiembroSquad (nombreCompleto, edad, poder){
	this.nombreCompleto = nombreCompleto;
	this.edad = edad;
	this.poder = poder;

}

var alejandra = new MiembroSquad("alejandra morales", 27, ["dormir", "hacer deporte", "cocinar"] );
var paulina = new MiembroSquad("paulina rojas", 35, ["saber ingles", "comer", "disfrutar su familia"]);
var susana = new MiembroSquad("susana opazo", 25, ["aprender javascript", "alentar al bulla", "Amar las tarjetas"]);
var martina = new MiembroSquad("martina cobarrubias", 27, ["cantar", "Jugar con sus hijas", "escuchar musica"]);
var fa = new MiembroSquad("perla diaz", 31, ["cine", "reir mucho", "Amar los gatos"]);
var jocelin = new MiembroSquad("jocelin grez",22, ["usar gorrito", "tener frio", "vender juegos"]);
var valentina = new MiembroSquad("valentina rodriguez", 25, ["odiar al mundo", "Escuchar música", "hacer panqueques"]);
var vales = new MiembroSquad("valentina spuler", 21, ["tomar tecito", "proclastinar", "ver gif de gatitos"]);
var pauli = new MiembroSquad("paulina huañaco", 20, ["reir y venir abrigada", "comer", "disfrutar su familia"]);


//Añadiendo un título
var elemento = document.createElement("h2");
var contenido = document.createTextNode("Las super Taldo");
elemento.appendChild(contenido);
elemento.setAttribute("align", "center");
document.getElementById("titulo").appendChild(elemento);



//Añado datos a compañeras


var divalejandra = document.getElementById("alejandram").innerHTML += "<strong>Nombre: </strong>" + alejandra.nombreCompleto + "<br><strong> Edad: </strong>" + alejandra.edad + " años" + "<br><strong> Super Poder: </strong><li>" + alejandra.poder + "</li>"; 
var divpaulina = document.getElementById("paulinar").innerHTML += "<strong>Nombre: </strong>" + paulina.nombreCompleto + "<br><strong> Edad: </strong>" + paulina.edad + " años" + "<br><strong> Super Poder: </strong><li>" + paulina.poder + "</li>"; 
var divsusana = document.getElementById("susanao").innerHTML += "<strong>Nombre: </strong>" + susana.nombreCompleto + "<br><strong> Edad: </strong>" + susana.edad + " años" + "<br><strong> Super Poder: </strong><li>" + susana.poder + "</li>"; 
var divmartina = document.getElementById("martinac").innerHTML += "<strong>Nombre: </strong>" + martina.nombreCompleto + "<br><strong> Edad: </strong>" + martina.edad + " años" + "<br><strong> Super Poder: </strong><li>" + martina.poder + "</li>"; 
var divfa = document.getElementById("perlad").innerHTML += "<strong>Nombre: </strong>" + fa.nombreCompleto + "<br><strong> Edad: </strong>" + fa.edad + " años" + "<br><strong> Super Poder: </strong><li>" + fa.hobbies + "</li>"; 
var divjocelin = document.getElementById("joceling").innerHTML += "<strong>Nombre: </strong>" + jocelin.nombreCompleto + "<br><strong> Edad: </strong>" + jocelin.edad + " años" + "<br><strong> Super Poder: </strong><li>" + jocelin.poder + "</li>"; 
var divvalentina = document.getElementById("valentinar").innerHTML += "<strong>Nombre: </strong>" + valentina.nombreCompleto + "<br><strong> Edad: </strong>" + valentina.edad + " años" + "<br><strong> Super Poder: </strong><li>" + valentina.poder + "</li>"; 
var divvalen = document.getElementById("valentinas").innerHTML += "<strong>Nombre: </strong>" + vales.nombreCompleto + "<br><strong> Edad: </strong>" + vales.edad + " años" + "<br><strong> Super Poder: </strong><li>" + vales.poder + "</li>"; 
var divpauh = document.getElementById("paulinah").innerHTML += "<strong>Nombre: </strong>" + pauli.nombreCompleto + "<br><strong> Edad: </strong>" + pauli.edad + " años" + "<br><strong> Super Poder: </strong><li>" + pauli.poder + "</li>"; 




function dejaComentario() {
	var nombrecomentario = document.getElementById("comentario");
	
	var reflejarcomentario = document.getElementById("coment");
	reflejarcomentario.innerHTML += nombrecomentario.value;
	nombrecomentario.value = " ";	
}























