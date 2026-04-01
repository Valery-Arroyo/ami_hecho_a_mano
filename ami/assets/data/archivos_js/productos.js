$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/Valery-Arroyo/ami_hecho_a_mano/master/ami/assets/data/productos.json", function (data) {

        $.each(data.productos, function (i, producto) {
            $("#lista-productos").append(`
                <div class="productos-card">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <a href="indexcontacto.html" class="btn-producto">Consultar</a>
                </div>
            `);
        });

    }).fail(function () {
        console.log("No se pudo cargar el archivo JSON.");
    });
});