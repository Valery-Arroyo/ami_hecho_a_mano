$(document).ready(function () {

    $.getJSON(
        "https://raw.githubusercontent.com/Valery-Arroyo/ami_hecho_a_mano/master/ami/assets/data/sobreami.json",
        function (data) {

            const contenedorImagenes = $("#imagenes-ami");
            const contenedorTexto = $("#texto-ami");

            contenedorImagenes.html("");
            contenedorTexto.html("<h3>Más que crochet...</h3>");

            if (data && data.imagenes && data.sobreAmi && data.sobreAmi.parrafos) {

                /* Cargar imágenes */
                $.each(data.imagenes, function (index, item) {

                    contenedorImagenes.append(`
                        <div class="img-item">
                            <img src="${item.imagen}" alt="${item.nombre}">
                        </div>
                    `);

                });
                $.each(data.sobreAmi.parrafos, function (index, parrafo) {

                    contenedorTexto.append(`
                        <p>${parrafo.texto}</p>
                    `);

                });

            } else {

                console.warn("El JSON no trae contenido esperado");

            }

        }
    )
    .fail(function (error) {

        console.error("Error:", error);

    });

});