
function MiembroSquad (nombreCompleto, edad, hobbies){
	this.nombreCompleto = nombreCompleto;
	this.edad = edad;
	this.hobbies = hobbies;

}

var alejandra = new MiembroSquad("alejandra morales", 27, ["dormir", "hacer deporte", "cocinar"] );
var paulina = new MiembroSquad("paulina rojas", 35, ["saber ingles", "comer", "disfrutar su familia"]);
var susana = new MiembroSquad("susana opazo", 25, ["aprender javascript", "alentar al bulla", "Amar las tarjetas"]);
var martina = new MiembroSquad("martina cobarrubias", 27, ["cantar", "Jugar con sus hijas", "escuchar musica"]);
var fa = new MiembroSquad("perla diaz", 31, ["cine", "reir mucho", "Amar los gatos"]);
var jocelin = new MiembroSquad("jocelin grez",22, ["usar gorrito", "tener frio", "vender juegos"]);
var valentina = new MiembroSquad("valentina rodriguez", 25, ["odiar al mundo", "Escuchar música", "hacer panqueques"]);
var vales = new MiembroSquad("valentina spuler", 21, ["tomar tecito", "proclastinar", "ver gif de gatitos"]);


//Añadiendo un título
var elemento = document.createElement("h2");
var contenido = document.createTextNode("Las super Taldo");
elemento.appendChild(contenido);
elemento.setAttribute("align", "center");
document.getElementById("titulo").appendChild(elemento);



//Añadiendo a cada div los datos


var divalejandra = document.getElementById("alejandram").innerHTML += "<strong>Nombre Completo: </strong>" + alejandra.nombreCompleto + "<br><strong> Edad: </strong>" + alejandra.edad + " años" + "<br><strong> Hobbies: </strong><li>" + alejandra.hobbies + "</li>"; 
var divpaulina = document.getElementById("paulinar").innerHTML += "<strong>Nombre Completo: </strong>" + paulina.nombreCompleto + "<br><strong> Edad: </strong>" + paulina.edad + " años" + "<br><strong> Hobbies: </strong><li>" + paulina.hobbies + "</li>"; 
var divsusana = document.getElementById("susanao").innerHTML += "<strong>Nombre Completo: </strong>" + susana.nombreCompleto + "<br><strong> Edad: </strong>" + susana.edad + " años" + "<br><strong> Hobbies: </strong><li>" + susana.hobbies + "</li>"; 
var divmartina = document.getElementById("martinac").innerHTML += "<strong>Nombre Completo: </strong>" + martina.nombreCompleto + "<br><strong> Edad: </strong>" + martina.edad + " años" + "<br><strong> Hobbies: </strong><li>" + martina.hobbies + "</li>"; 
var divfa = document.getElementById("perlad").innerHTML += "<strong>Nombre Completo: </strong>" + fa.nombreCompleto + "<br><strong> Edad: </strong>" + fa.edad + " años" + "<br><strong> Hobbies: </strong><li>" + fa.hobbies + "</li>"; 
var divjocelin = document.getElementById("joceling").innerHTML += "<strong>Nombre Completo: </strong>" + jocelin.nombreCompleto + "<br><strong> Edad: </strong>" + jocelin.edad + " años" + "<br><strong> Hobbies: </strong><li>" + jocelin.hobbies + "</li>"; 
var divvalentina = document.getElementById("valentinar").innerHTML += "<strong>Nombre Completo: </strong>" + valentina.nombreCompleto + "<br><strong> Edad: </strong>" + valentina.edad + " años" + "<br><strong> Hobbies: </strong><li>" + valentina.hobbies + "</li>"; 
var divvalen = document.getElementById("valentinas").innerHTML += "<strong>Nombre Completo: </strong>" + vales.nombreCompleto + "<br><strong> Edad: </strong>" + vales.edad + " años" + "<br><strong> Hobbies: </strong><li>" + vales.hobbies + "</li>"; 




function dejaComentario() {
	var nombrecomentario = document.getElementById("comentario");
	
	var reflejarcomentario = document.getElementById("coment");
	reflejarcomentario.innerHTML += nombrecomentario.value;
	nombrecomentario.value = " ";	
}


var img = new Image();
var div = document.getElementById("contenedor-fotoale");

img.onload = function() {
  div.innerHTML += '<img src="'+'images/ale.png'+'" />';
};

img.src = 'images/ale.png';




















