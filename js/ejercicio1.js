//comentaio de una sola linea

/* comentarios multilinea
   ...
   multilinea
*/

// EJERCICIO 01: Declaraciones de variables de JavaScript

//1. utilizable

console.warn("Declaracion de una constante utilizando el prefijo var ")
var elNombre = "Jonathan I";
console.log("El valor encarcelado en la variable elNombre es: "+elNombre);

//Modificar el valor de la variable
var elNombre = "Jonathan Isai";
console.log("El valor nuevo de la variable elNombre es: "+elNombre);

var misapellidos ;
console.log("El valor almacenado en la variable misapellidos es: "+misapellidos);

//una vraiable puede cambiar su valor la ejecucion del programa

console.warn("Declaracion de una constante utilizando el prefijo CONS ")

// Una constante a diferencia de una variable es que su valor no cambiara durante toda la ejecucuion del programa, y al momento de declararla se le debe asignar un valor

const mimatricula = "240603";

console.log("El valor almacenado en la constante mimatricula es: "+mimatricula);

//intentando modificar el valor de la constante

//mimatricula = "240603"; // Esto generara un error en la consola
//console.log("El valor almacenado en la constante mimatricula es: "+mimatricula);

// 3. Utilizando la palabara reservada LET
//LET es el prefijo utilizado muy similar a VAR con la diferencia en su alcance (Scope),
//aquellas declaradas con VAR tienen un alcance global en el codigo no importando siempre o 
//secciones, mientras que las variable declaradas  con LET solo existieron dentro del bloque o funcion.


var fecha_nacimiento = new Date("2006-09-16")
var miedad = calcularEdad(fecha_nacimiento);
console.log("La edad es de "+miedad+" años");

if(miedad >=18){
    var esMayorEdad = true;
    let esMenorEdad = false;

}

if(esMayorEdad){
console.log("Es mayor de edad");

}else{
    console.log("Es menor de edad");
}


function calcularEdad(fecha_nacimiento){
  //para calcular Edad reuerimos la fecha del dia de hoy 
  var fecha_hoy = new Date();
  
  //Dado que los datos de fecha son almacenados en milisegundos por dafault en JavaScript, necesitamos una variable  que nos permita saber el numero fe milisegundos por dia

  let milisegundospordia = 24*60*60*1000;
  //ya que tenemos los milisegundos por dia tenemos que restar a la frecha de hoy, la fecha en que nacimos para calcular los milisegundos que hemos vivido
  let diasvividos = (fecha_hoy - fecha_nacimiento)/milisegundospordia;

  //invocamos el metodo matematico de la funcion piso (FLOOR)

   var edad = diasvividos/365.25;
    edad = Math.floor(edad);

 return edad;
}


//interpolacion de datos

// $ () `
misapellidos = "Leal Cruz";
console.log(`Hola, ${elNombre} ${misapellidos} actualmente tienes ${miedad} años.`);
//Autor: Jonathan Isai Leal Cruz