(function() {

emailjs.init("jf2eYk2khr_yasKoe");

document.getElementById("formRegistro")
.addEventListener("submit", function(e) {

e.preventDefault();

let nombre =
document.getElementById("nombre").value.trim();

let email =
document.getElementById("email").value.trim();

let fecha =
document.getElementById("fechaNacimiento").value;

let rango =
document.getElementById("rangoIngreso").value;

let descripcion =
document.getElementById("descripcionPedido").value.trim();

let grado =
document.getElementById("gradoAcademico").value;

let generoSeleccionado =
document.querySelector('input[name="genero"]:checked');

/* Validaciones */

let letrasRegex =
/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

let emailRegex =
/^[^@\s]+@[^@\s]+\.[^@\s]+$/;

if(nombre === "" ||
!letrasRegex.test(nombre)) {

alert("Debe ingresar un nombre válido (solo letras)");
return;

}

if(email === "" ||
!emailRegex.test(email)) {

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

if(descripcion === "") {

alert("Debe ingresar la descripción del pedido");
return;

}

if(generoSeleccionado === null) {

alert("Debe seleccionar un género");
return;

}

/* Validar grado académico */

if(grado === "") {

alert("Debe seleccionar un grado académico");
return;

}

/* Calcular edad */

let fechaNac =
new Date(fecha);

let hoy =
new Date();

let edad =
hoy.getFullYear() -
fechaNac.getFullYear();

let mes =
hoy.getMonth() -
fechaNac.getMonth();

if(mes < 0 ||
(mes === 0 &&
hoy.getDate() < fechaNac.getDate())) {

edad--;

}

document.getElementById("edad").value =
edad;

/* Enviar formulario */

emailjs.sendForm(
"service_b2myfst",
"template_g1vy3vn",
this
)

.then(function() {

alert("Formulario enviado 💌");

document.getElementById("formRegistro").reset();

},

function(error) {

alert("❌ Error al enviar: "
+ JSON.stringify(error));

});

});

})();