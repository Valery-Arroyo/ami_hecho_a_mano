$(document).ready(function () {

    emailjs.init("jf2eYk2khr_yasKoe");

    $("#fechaNacimiento").attr(
        "max",
        new Date().toISOString().split("T")[0]
    );

    $("#formRegistro").on("submit", function (e) {

        e.preventDefault();

        let nombre = $("#nombre").val().trim();
        let email = $("#email").val().trim();
        let fecha = $("#fechaNacimiento").val();
        let descripcion = $("#descripcionPedido").val().trim();
        let grado = $("#gradoAcademico").val();
        let generoSeleccionado =
            $('input[name="genero"]:checked').val();


        let letrasRegex =
            /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

        let emailRegex =
            /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if (nombre === "" ||
            !letrasRegex.test(nombre)) {

            alert("Debe ingresar un nombre válido (solo letras)");
            return;

        }

        if (email === "" ||
            !emailRegex.test(email)) {

            alert("Debe ingresar un correo válido con @");
            return;

        }

        if (fecha === "") {

            alert("Debe seleccionar la fecha de nacimiento");
            return;

        }

        let fechaNac = new Date(fecha);
        let hoy = new Date();

        hoy.setHours(0,0,0,0);

        if (fechaNac > hoy) {

            alert("La fecha no puede ser mayor al día actual");
            return;

        }

        if (descripcion === "") {

            alert("Debe ingresar la descripción del pedido");
            return;

        }

        if (!generoSeleccionado) {

            alert("Debe seleccionar un género");
            return;

        }

        if (grado === "") {

            alert("Debe seleccionar un grado académico");
            return;

        }

        let edad =
            hoy.getFullYear() -
            fechaNac.getFullYear();

        let mes =
            hoy.getMonth() -
            fechaNac.getMonth();

        if (mes < 0 ||
            (mes === 0 &&
             hoy.getDate() < fechaNac.getDate())) {

            edad--;

        }

        if (edad < 15) {

            alert("Debe tener al menos 15 años");
            return;

        }

        if (edad > 100) {

            alert("Edad no válida");
            return;

        }

        $("#edad").val(edad);

        emailjs.sendForm(
            "service_b2myfst",
            "template_g1vy3vn",
            this
        )

        .then(function () {

            alert("Formulario enviado 💌");

            $("#formRegistro")[0].reset();

        })

        .catch(function (error) {

            alert("❌ Error al enviar: "
                + JSON.stringify(error));

        });

    });

});