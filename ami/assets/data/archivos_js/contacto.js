document.getElementById("formRegistro")
.addEventListener("submit", function(e) {

e.preventDefault();

let nombre = document.getElementById("nombre").value.trim();
let email = document.getElementById("email").value.trim();
let fecha = document.getElementById("fechaNacimiento").value;
let rango = document.getElementById("rangoIngreso").value;
let grado = document.getElementById("gradoAcademico");

let generoSeleccionado =
document.querySelector('input[name="genero"]:checked');

let letrasRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
let emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

if(nombre === "") {
alert("Debe ingresar el nombre completo");
return;
}

if(!letrasRegex.test(nombre)) {
alert("El nombre solo debe contener letras");
return;
}

if(email === "") {
alert("Debe ingresar un correo electrónico");
return;
}

if(!emailRegex.test(email)) {
alert("Debe ingresar un correo válido con @");
return;
}

if(fecha === "") {
alert("Debe seleccionar la fecha de nacimiento");
return;
}

if(rango === "") {
alert("Debe ingresar el rango de ingreso");
return;
}

if(generoSeleccionado === null) {
alert("Debe seleccionar un género");
return;
}

let seleccionados = Array.from(grado.selectedOptions);

if(seleccionados.length === 0) {
alert("Debe seleccionar al menos un grado académico");
return;
}

/* Calcular edad */

let fechaNac = new Date(fecha);
let hoy = new Date();

let edad = hoy.getFullYear() - fechaNac.getFullYear();

let mes = hoy.getMonth() - fechaNac.getMonth();

if(mes < 0 ||
   (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
edad--;
}

document.getElementById("edad").value = edad;

/* Si todo está bien */

alert("Formulario enviado correctamente");

this.submit();

});