$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/Valery-Arroyo/ami_hecho_a_mano/master/ami/assets/data/productos.json", function (data) {

        let destacados = data.productos.slice(0, 3);

        $.each(destacados, function (i, producto) {
            $("#lista-productos").append(`
                <div class="producto-card">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                     <a href="indexproductos.html" class="btn-producto">
                        Ver más
                    </a>
                </div>
            `);
        });
    });
});