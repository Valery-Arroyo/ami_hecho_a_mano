$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/Valery-Arroyo/ami_hecho_a_mano/master/ami/assets/data/productos.json", function (data) {

        $.each(data.productos, function (i, producto) {

            const mensaje = `Hola quiero consultar este producto:
            ${producto.nombre}`;

            const urlWhatsApp = "https://wa.me/50684716880?text=" + encodeURIComponent(mensaje);

            $("#lista-productos").append(`
                <div class="productos-card">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <a href="${urlWhatsApp}" class="btn-producto" target="_blank">
                        Consultar
                    </a>
                </div>
            `);

        });

    }).fail(function () {
        console.log("No se pudo cargar el archivo JSON.");
    });
});