$(document).ready(function () {

    const urlJSON = "https://raw.githubusercontent.com/Valery-Arroyo/ami_hecho_a_mano/master/ami/assets/data/acercade.json";

    $.getJSON(urlJSON, function (data) {

        console.log("JSON cargado:", data);
        $("#fotoAcerca").attr("src", data.acerca.imagen);
        $("#descripcionAcerca").text(data.acerca.descripcion);
        $("#correoAcerca").text(data.acerca.correo);
        $("#correoAcerca").attr("href", "mailto:" + data.acerca.correo);

    }).fail(function (jqxhr, textStatus, error) {

        console.error("Error cargando JSON:");
        console.error(textStatus, error);

    });

});