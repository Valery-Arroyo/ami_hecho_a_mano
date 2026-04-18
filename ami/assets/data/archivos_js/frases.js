$(document).ready(function () {

    $.getJSON(
        "https://positive-api.online/phrases/esp",
        function (data) {

            let random =
                Math.floor(Math.random() * data.length);

            let frase = data[random].text;
            let autor = data[random].author;

            $("#fraseTexto")
                .text('"' + frase + '"');

            $("#fraseAutor")
                .text("- " + (autor || "Anónimo"));

            let toast =
                new bootstrap.Toast(
                    document.getElementById("fraseToast"),
                    {
                        delay: 8000
                    }
                );

            const sound =
                document.getElementById("toastSound");

            function mostrarToast() {

                /* Desbloquear audio */
                sound.play()
                .then(() => {

                    sound.pause();
                    sound.currentTime = 0;

                    /* Mostrar toast */
                    toast.show();

                })
                .catch(() => {

                    /* Si falla igual mostrar toast */
                    toast.show();

                });

            }

            /* PC */
            document.addEventListener(
                "mousemove",
                mostrarToast,
                { once: true }
            );

            /* Móvil */
            document.addEventListener(
                "touchstart",
                mostrarToast,
                { once: true }
            );

            /* Seguridad */
            document.addEventListener(
                "click",
                mostrarToast,
                { once: true }
            );

        }
    );

});