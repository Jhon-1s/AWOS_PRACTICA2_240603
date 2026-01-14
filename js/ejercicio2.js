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
console.warn("3.- NUMBER (NUMÉRICOS)")
/* Es importante saber que Java Script a diferencia de otros lenguajes no diferencia los datos de tipo númerico, lo que para otros leguajes de programación lo que un ENTERO (INT), FLOTANTE (FLOAT), DECIMAL , DOBLE (DOUBLE), para el solo son números (NUMBER)*/

let userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let longGPS =-97.952881
let altGPS = 1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:
                    ID del Usuario propietario: ${userID_Owner} 
                    Precio de la propiedad: ${priceProperty}
                    Latitud (GPS) : ${latGPS}
                    Longitud (GPS) : ${longGPS}
                    Altitud (GPS) : ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son:
                    ID del Usuario propietario: ${typeof(userID_Owner)} 
                    Precio de la propiedad: ${typeof(priceProperty)}
                    Latitud (GPS) : ${typeof(latGPS)}
                    Longitud (GPS) : ${typeof(longGPS)}
                    Altitud (GPS) : ${typeof(altGPS)}`);


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

/*Este tipo de dato permite almacenar  numeros exageradamente amplios que usualmente aplicaciones científicas avanzadas requieren , esto para no perder presición en los valores almacenados. */

const numeroGrande = 1234567890;
let numeroGrande2 = 12345678901234567890;
let numeroGrande3 = 123456789012345678901234567890;
let numeroGrande4 = 1234567890123456789012345678901234567890;

console.warn("5. BIGINT  (Entero de Gran Precisión) ")

console.log(`El valor de numeroGrande es: ${numeroGrande} y es soportado por: ${typeof(numeroGrande)}`);
console.log(`El valor de numeroGrande2 es: ${numeroGrande2} a pesar de ser  soportado por: ${typeof(numeroGrande2)} comienza a sufrir problemas de precisión`);
console.log(`El valor de numeroGrande3 es: ${numeroGrande3} a pesar de ser  soportado por: ${typeof(numeroGrande3)} comienza a sufrir problemas de precisión`);
console.log(`El valor de numeroGrande4 es: ${numeroGrande4} a pesar de ser  soportado por: ${typeof(numeroGrande4)} comienza a sufrir problemas de precisión`);

numeroGrande2 = BigInt("12345678901234567890")
console.log(`Si declaramos la variable con BigInt el valor de numeroGrande2 es: ${numeroGrande2} con un tipo de dato: ${typeof(numeroGrande2)}`);
numeroGrande3 = BigInt("123456789012345678901234567890")
console.log(`Si declaramos la variable con BigInt el valor de numeroGrande2 es: ${numeroGrande3} con un tipo de dato: ${typeof(numeroGrande3)}`);
numeroGrande4 = BigInt("1234567890123456789012345678901234567890")
console.log(`Si declaramos la variable con BigInt el valor de numeroGrande2 es: ${numeroGrande4} con un tipo de dato: ${typeof(numeroGrande4)}`);

// 6. SYMBOL (Símbolo)

/* Es un tipo de dato que ademas de tener un tipo, un valor , asocia la ubicación del espació en memoria, por lo que todos los valores asignados a una variable de este tipo siempre serán ÚNICOS.*/

console.warn("6. SYMBOL (Símbolos)");

const numero1 = 4;
const numero2 = 4.0;
const numero3 = "4";
const numero4 = "4.0";
const numero5 = Symbol(4);
const numero6 = Symbol(4.0);
const numero7 = Symbol("4");
const numero8 = Symbol("4.0");

// Valores y tipos de datos 
console.log(`Valores y tipos: 
    numero1 -  valor: ${numero1}, tipo: ${typeof(numero1)}
    numero2 -  valor: ${numero2}, tipo: ${typeof(numero2)}
    numero3 -  valor: ${numero3}, tipo: ${typeof(numero3)}
    numero4 -  valor: ${numero4}, tipo: ${typeof(numero4)}
    numero5 -  valor: ${numero5.description}, tipo: ${typeof(numero5)}
    numero6 -  valor: ${numero6.description}, tipo: ${typeof(numero6)}
    numero7 -  valor: ${numero7.description}, tipo: ${typeof(numero7)}
    numero8 -  valor: ${numero8.description}, tipo: ${typeof(numero8)}`)
    
    //Pruebas comparativas

    if( numero1 == numero2)
        console.log("Las variables numero1 y numero2 son iguales en valor.")
    else
        console.log("Las variables numero1 y numero2 no son iguales en valor.")

    if( numero1 == numero3)
        console.log("Las variables numero1 y numero3 son iguales en valor.")
    else
        console.log("Las variables numero1 y numero3 no son iguales en valor.")
    
    if( numero1 === numero3)
        console.log("Las variables numero1 y numero3 son iguales en valor y tipo de dato.")
    else
        console.log("Las variables numero1 y numero3 no son iguales en valor, ni en tipo de dato.")

    if( numero1 == numero4)
        console.log("Las variables numero1 y numero4 son iguales en valor.")
    else
        console.log("Las variables numero1 y numero4 no son iguales en valor.")

    if( numero1 === numero4)
        console.log("Las variables numero1 y numero4 son iguales en valor y tipo de dato.")
    else
        console.log("Las variables numero1 y numero4 no son iguales en valor, ni en tipo de dato.")

    if( numero1 == numero5)
        console.log("Las variables numero1 y numero5 son iguales en valor y tipo de dato.")
    else
        console.log("Las variables numero1 y numero5 no son iguales en valor, ni en tipo de dato.")

    if( numero5 == numero6)
        console.log("Las variables numero5 y numero6 son iguales en valor y tipo de dato.")
    else
        console.log("Las variables numero5 y numero6 no son iguales en valor, ni en tipo de dato.")

    //7.  NULL (NULO)
/*El tipo de dato nulo es similar a UNDEFINED, con la variación de que hay un consentimiento del usuario o del sistema a que esta variable intencionalmente fue iniciada con este valor*/


var isPremiumUser;
var isNewUser;
let todayDate = new Date();
var lastLogin = todayDate;

console.warn("7. NULL (Nulo)");
console.log(`
    El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
    Fecha ultimo login: ${todayDate} tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser} tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiumUser} tipo de dato: ${typeof(isPremiumUser)}`);

// Validación del usuario

if(todayDate == lastLogin)
    isNewUser=true;
else 
    isNewUser=false;

// Cómo es un usuario nuevo aun no ve , ni publica ninguna propiedad por defecto no interesa por el momento que sea premium hasta que interctue con la plataforma
isPremiumUser=null;
console.log("Datos después de la validación del usuario: ")
console.log(`
    El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
    Fecha ultimo login: ${todayDate} tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser} tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiumUser} tipo de dato: ${typeof(isPremiumUser)}`);     