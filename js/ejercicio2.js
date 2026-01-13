//Tipos de datos en JavaScript

//Personalizacion de salidas a Consola
//const bg="linear-gradient(45deg, rgba(52, 152, 219, 1)0%, rgba (26, 188, 156, 1) 50%)";
//const style_console = `background: ${bg}; color: white; border-radius:6px; padding:4px; font-size:1.0rem;font-weight:bold`;

console.log("%c2.-Ejercicio 02: Tipos de Datos", style_console);

//1. Undifined - valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL.
console.warn("1.- Undifined (No Definido)");
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

/* En Java Script existe un metodo typeof() que nos devuelve el tipo de una varible
preficamente declarada o su valor*/

console.log("Valores actuales de las variables:");
console.log('usuarioLogeado = ${typeof(usuarioLogeado)}');
console.log('rolUsuario = ${typeof(rolUsuario)}');
console.log('ultimoAcceso = ${typeof(ultimoAcceso)}');

//supongamos que un usuario denominado Jonathan se ha logeado exitosamente , el valor de la variable debera
//actualizarse a su username
usuarioLogeado = "Jonathan I";

//PERO NO SOLO CAMBIARA SU VALOR SINO TAMBIEN SU TIPO DE DATO

console.log('El valor de la varible usuarioLogeado ahora es: ${usuarioLogeado}y su tipo de dato es: ${typeof(usuarioLogeado)}');

//2. BOOLEAN (TRUE/FALSE) - Verdadero o falso
console.warn("2. BOOLEAN (TRUE/FALSE) - Verdadero o falso")
var hayUsuarioLogeado;

/* Supongamos que nuestra app tendra un menu especifico para los usuarios
registrados, en el podran visualizar sus mensajes o estados de sus publicaciones
de renta o venta de propiedades, a diferencia de un usuario que entra de manera igcognita a visualizar
las propiedades*/
function validacionUsuarioLogeado(){

console.log('El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado}, que es de tipo: ${typeof(hay usuarioLogeado)}');

if(hayUsuarioLogeado===true){
   console.log("Dado que se ha logueado un usuario la app mostrara el menu de usuario");
}
else if(!hayUsuarioLogeado){
console.log("Dado que no hay usuario logueado la app no mostrara el menu de usuario");
}

else{
    console.log("No puedo procesar este tipo de dato, requerido de un boolean.")
}
}
//test1 : usuario logeado = true
hayUsuarioLogeado=true;
console.log("Test_1")
validacionUsuarioLogeado();
//test2 : usuario logeado = false
hayUsuarioLogeado=false;
console.log("Test_2")
validacionUsuarioLogeado();
//test1 : usuario logeado = cualquier otra cosa
hayUsuarioLogeado=52.5;
console.log("Test_3")
validacionUsuarioLogeado();

//3. NUMBER - Tipo de dato numerico, ya sea entero o decimal
console.warn("3. NUMBER - Tipo de dato numerico, ya sea entero o decimal")
/* Es importante saber que JavaScript s diferencia de otros lenguajes no difiere entre enteros y decimales
lo que para otros lenguajes de programaion lo que un ENTERO (INT), FLOTANTE(FLOAT), DECIMAL, DOUBLE(DOUBLE) para
el solo son numeros*/
let userID_Owner = 225
let priceProperty = 1250000.50
let latGPS = 20.240508
let altGPS =  -97.952881
let longGPS = 1180

console.log(`Los valores de las variables declarados para los datos de la propiedad son:\n'
     +'ID del usuario propietario: ${(userID_Owner)}\n'
     +'Precio de la propiedad: ${priceProperty}\n'
     +'Latitud GPS: ${latGPS}\n'
     +'Altitud GPS: ${altGPS}\n'
     +'Longitud GPS: ${longGPS}');
console.log('Los tipos de las variables declaradas para los datos de la propiedad son: \n'
    +'ID del usuario propietario: ${typeof(userID_Owner)}\n'
    +'Precio de la propiedad: ${typeof(priceProperty)}\n'
    +'Latitud GPS: ${typeof(latGPS)}\n'
    +'Altitud GPS: ${typeof(altGPS)}\n'
    +'Longitud GPS: ${typeof(longGPS)}');



//4. STRING - Tipo de dato cualitativo, cadenas de texto
console.warn("4. STRING - Tipo de dato cualitativo, cadenas de texto")
/* Este tipo de dato es utilizado para almacenar informacion cualitativa, ya sea nombres,
descripciones, direcciones, etc. Las cadenas de texto en JavaScript pueden ser definidas utilizando
comillas simples (' '), comillas dobles (" ") o backticks (` `) para plantillas literales.*/
var fullnameOwner = "Jonathan Isai Martinez Hernandez";
let nameProperty = " Hermosa  Casa en la playa de Puerto Vallarta";
let descriptionProperty = "Hermosa casa en la playa de Puerto Vallarta con vista al mar, cerca de parques y avenidas principales, con excelentes acabados y espacios amplios.";
var statusProperty = 'Disponible';
const typeproperty = "C";
var addressProperty = 'Calle 5 de Mayo #123, Colonia Centro, C.P. 48300, Puerto Vallarta, Jalisco, México.';

//Manipulando Strings, los tipos de datos cualitativos tienen ciertos metodos para manipular su valor por mecionar algunos:



//Transforma a MAYUSCULAS 
console.log('Nombre del propietario ${fullnameOwner.toUpperCase()}');

//Transforma a minusculas
console.log('Nombre del propietario ${descriptionProperty.toLowerCase()}');

//Numero de caracteres
console.log('El numero de caracteres en el nombre de la propiedad es: ${typeproperty.length}');

//Subcadena
console.log('Apellido del propietario: ${fullnameOwner.slice(8,fullnameOwner.length)}');

//Eliminar espacios 
console.log('Nombre de la propiedad: ${nameProperty.trim()}');

//Remplazar caracteres
console.log('Descripcion modificada: ${descriptionProperty.replace("Mar","Rio")}');

//Remplazar todos los caracteres
console.log('Descripcion modificada: ${descriptionProperty.replaceAll("A","4")}');


//5. BIGINT - Tipo de dato numerico para valores ENTEROS muy grandes

console.warn("5.BIGINT - (Entero de Grandes precision)");

/*Este tipo de dato permite representar números enteros de gran tamaño, superando los límites de los
números que se usualmente aplicaciones cientificas avanzadas, esto para no perder precision en los valores almacenados*/

const numeroGrande = 1234567890123456789;
let numeroGrande2= 98765432109876543226541651651651218651;
let numeroGrande3= 18948946516516516516516516516516516516516516516516516;
let numeroGrande4= 4651651651651651651651651651651651651651651651651651651651651;

console.log(`'El valor de la variable numeroGrande es: ${numeroGrande}, y es soportado por: ${typeof(numeroGrande)}'}`);
console.log(`'El valor de la variable numeroGrande2 es: ${numeroGrande2} apesar de ser soportado por: ${typeof(numeroGrande2)'`} comienza a sufirir problemas de precision en su representacion`);
console.log(`El valor de la variable numeroGrande3 es: ${numeroGrande3} ya no es soportado por: ${typeof(numeroGrande3)} comienza a sufirir problemas de precision en su representacion`);
console.log(`El valor de la variable numeroGrande4 es: ${numeroGrande4} y su tipo de dato es: ${typeof(numeroGrande4)} comienza a sufirir problemas de precision en su representacion`);

//Para solucionar este problema JavaScript introduce el tipo de dato BIGINT, para definir un valor como BigInt
//solo es necesario agregar al final de la declaracion la letra n

numeroGrande2 = BigInt("98765432109876543226541651651651218651")
numeroGrande3 = BigInt("18948946516516516516516516516516516516516516516516516");
numeroGrande4 = BigInt("4651651651651651651651651651651651651651651651651651651651651");

console.log(`El valor de la variable numeroGrande2 es: ${numeroGrande2} y es soportado por: ${typeof(numeroGrande2)}`);
console.log(`El valor de la variable numeroGrande3 es: ${numeroGrande3} y es soportado por: ${typeof(numeroGrande3)}`);
console.log(`El valor de la variable numeroGrande4 es: ${numeroGrande4} y es soportado por: ${typeof(numeroGrande4)}`);

//6. SYMBOL - Tipo de dato unico e inmutable
console.warn("6. SYMBOL - (Simbolos)");

/* Este tipo de dato es utilizado para crear identificadores unicos para propiedades de objetos,
asegurando que no habra colisiones de nombres incluso si las propiedades tienen el mismo nombre descriptivo*/

const numero1 = 4; 
const numero2 = 4.0;
const numero3 = "4.0";
const numero4 = Symbol(4);
const numero5 = Symbol(4.0);
const numero6 = Symbol("4.0");
const numero7 = Symbol("4");

console.log(`Valor de tipos:
    numero1: - valor : ${numero1}, tipo: ${typeof numero1}
    numero2: - valor : ${numero2}, tipo: ${typeof numero2}
    numero3: - valor : ${numero3}, tipo: ${typeof numero3}
    numero4: - valor : ${numero4.description}, tipo: ${typeof numero4}
    numero5: - valor : ${numero5.description}, tipo: ${typeof numero5}
    numero6: - valor : ${numero6.description}, tipo: ${typeof numero6}
    numero7: - valor : ${numero7.description}, tipo: ${typeof numero7}
`);

if (numero === numero2){
    console.log("numero1 y numero2 son iguales");
}
else if (numero1 === numero3){
    console.log("numero1 y numero3 son iguales");
}else{
    console.log("numero1, numero2 y numero3 son diferentes");
}

//7. NULL - Tipo de dato que representa la ausencia intencional de valor
console.warn("7. NULL - (Valor nulo)");
/* Este tipo de dato es utilizado para indicar que una variable no tiene ningun valor asignado,
lo que es diferente a UNDEFINED que indica que una variable no ha sido inicializada.*/

var isPremiumUser;
var isNewUser;
var lasLogin=newDate();
let todayDate=new Date();

console.log(`
    El usuario: ${usuarioLogeado}
    Fecha ultimo login: ${todayDate}
    Es nuevo usuario: ${isNewUser}
    Es usuario premium: ${isPremiumUser}`);

//Validacion del usuario

if(todayDate === lasLogin)
    isNewUser = true;
else
    isNewUser = false;

//Como es un usuario nuevo aun nno ve, ni publica ninguna propiedad por defecto no interesa pior el momento qeue sea premium hasta que interactue con la plataforma

isPremiumUser = null;

console.log(`
    El usuario: ${usuarioLogeado}
    Fecha ultimo login: ${todayDate}
    Es nuevo usuario: ${isNewUser}
    Es usuario premium: ${isPremiumUser}`);