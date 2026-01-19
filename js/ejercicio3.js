//Estilazacion de la barra zona de pruebas en el DevTools en el navegador
console.log("%cEjercicio 03: Funciones",style_console);

//1. Funciones procedurales, vacias, VOID, sin valor de retorno y sin parametros de entrada

function saludar(){
    console.log("Bienvenido al Sistemas de Bienes Raices");
}
console.warn("1. Funciones sin valor de retorno y sin parametros de entrada");
saludar();

//2. Funciones sin valor de retorno, pero que si recibe parametros es decir datos de entrada

function saludar_usuario(username, gender){
    if (gender ==="H")
    console.log(`Bienvenido, ${username} al Sistema de Bienes Raices`);
    else if (gender ==="M")
    console.log(`Bienvenida, ${username} al Sistema de Bienes Raices`);
    else
    console.log(`Bienvenid@, ${username} al Sistema de Bienes Raices`);
}

console.warn("2. Funciones sin valor de retorno, con parametros de entrada");
saludar_usuario ("Jonathan", "H");
console.log("-------------------------------------------------------------");
saludar_usuario ("Patricia", "M");
console.log("-------------------------------------------------------------");
saludar_usuario ("Guadalupe", null);

//3. Funciones que reto9ornan un dato, pero que no reciben parametros de entrada

function fecha_actual(){
    const fecha = new Date();
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const fecha_formatomx = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    return fecha_formatomx;
}
console.warn("3. Funciones que retornan un dato, pero que no tienen parametros");
let hoy = fecha_actual();
console.log(`Bienvenid@ al Sistema de Bienes Raices, hoy es: ${hoy}`);
/*Imprimiendo el valor y que tipo de dato es*/
console.log(fecha_actual());
console.log(typeof fecha_actual());

//4. Funciones que retornan un dato y que reciben parametros de entrada

function login(username, password) {
    let userValidation = false;

    if (username === "admin" && password === "12345") {
        userValidation = true;
        console.log("Bienvenido usuario Admin!");
    } 
    else if (username === "admin" && password !== "12345") {
        userValidation = false;
        console.log("Lo sentimos, la contraseña es incorrecta");
    } 
    else if (username !== "admin" && password === "12345") {
        userValidation = false;
        console.log("Lo sentimos, el nombre de usuario no existe");
    } 
    else {
        userValidation = false;
        console.log("Por favor verifique sus credenciales de acceso");
    }

    return userValidation;
}

console.warn("4. Funciones que retornan un dato y que reciben parametros de entrada")
var loginStatus;
//Test 1 - Usuario y contraseña correctos
console.log("Test 1 - usuario:admin | contraseña:12345");
loginStatus = login("admin", "12345");
console.log(`${loginStatus ? 'El usuario admin se ha loguedo satisfactoriamente':'Hubo un error en el login del usuario admin'}`);

//Test 2 - Usuario correcto incorrecto
console.log("Test 2 - usuario:Administrador | contraseña:12345");
loginStatus = login("Administrador", "12345");
console.log(`${loginStatus ? 'El usuario admin se ha loguedo satisfactoriamente':'Hubo un error en el login del usuario admin'}`);

//Test 3 - Contraseña incorrecta
console.log("Test 3 - usuario:admin | contraseña:54321");
loginStatus = login("admin", "54321");
console.log(`${loginStatus ? 'El usuario admin se ha loguedo satisfactoriamente':'Hubo un error en el login del usuario admin'}`);

//Test 4 - Usuario y contraseña incorrectos
console.log("Test 4 - usuario:jon_1 | contraseña:mipassword");
loginStatus = login("jon_1", "mipassword");
console.log(`${loginStatus ? 'El usuario admin se ha loguedo satisfactoriamente':'Hubo un error en el login del usuario admin'}`);

//Funciones Anonimas, funciones flecha(ARROW), funciones lambda
/* A diferencia de lasfunciones nombradas este tipo de funciones no suelen ser reutilizadas en el cpdigo
solo se ejeutan una sola vez, dondo velocidad, indivilidad y privacidad a los datos utilizados en el proceso */

//5. Funcion annonima sin parametros

isNewUser = function(){
    const hoy= new Date();
    
    return(
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
    );
};

console.warn("5. Funcion annonima sin parametros");

console.log("Test 1 - Fecha de ultimo acceso igual a la fecha actual");
var lastLogin = new Date();
var isNewUser = isNewUser();
console.log(`La fecha del ultimo acceso es: ${lastLogin}`);
console.log(`El usuario logueado es: ${isNewUser? 'Nuevo usuario':'Usuario antiguo'}`);
console.log("-------------------------------------------------------------");
lastLogin = new Date('2025-12-31');
console.log("Test 2 - Fecha de ultimo acceso es diferente a la fecha actual");
console.log(`La fecha del ultimo acceso es: ${lastLogin}`);
console.log(`El usuario logueado es: ${isNewUser? 'Nuevo usuario':'Usuario antiguo'}`);

//6. Funciones Anonimas con Parametros (Version  Aroow o labmda)
console.warn("6. Funcion annonima con parametros");

const sumar =(a,b) => {
    let resultado = a + b;
    return resultado;
}

console.log(`El resultado de la suma de 15 + 83 es: ${sumar(15,83)}`);

//7. Funcion CALLBACK (funcion que se pasa como parametro a otra funcion)
//7. Funciones Callback (Regreso de Llamado)
console.warn("7. Funciones Anónimas Callback (Respuesta)")
const recoverPassword = function(email, callback)
{

    // Generamos el código a enviar al usuario.
    const recoveryCode= Math.floor(1000000 + Math.random()*900000)

    console.log(`
=======================================================================
Solicitud de recuperación recibida
Correo del usuario sollicitante: ${email}
Generando Código de Recuperación...
Código de Seguridad Generado: ${recoveryCode}
Enviando el correo al usuario...
Correo Enviado a : ${email}, con el código de seguridad: ${recoveryCode}
=======================================================================`);


// definiendo la respues del sistema
const response ={
    status: "OK",
    message: "Código de recuperación enviado satisfactoriamente."
};

callback(response);
};

// Invocación de una función callback
recoverPassword("jon@gmail.com", 
    function(systemResponse){
        console.log("Respuesta del sistema: ");
        console.log(systemResponse.message);
    });