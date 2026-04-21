$(document).ready(function () {

    const sound = document.getElementById("toastSound");
    let sonidoHabilitado = false;

    function habilitarSonido() {
        if (!sonidoHabilitado) {
            sound.play()
                .then(() => {
                    sound.pause();
                    sound.currentTime = 0;
                    sonidoHabilitado = true;
                })
                .catch(() => {});
        }
    }

    document.addEventListener("mousemove", habilitarSonido, { once: true });
    document.addEventListener("touchstart", habilitarSonido, { once: true });

    $.getJSON("https://positive-api.online/phrases/esp", function (data) {

        let random = Math.floor(Math.random() * data.length);
        let frase = data[random].text;
        let autor = data[random].author;

        $("#fraseTexto").text(`"${frase}"`);
        $("#fraseAutor").text("- " + (autor || "Anónimo"));

        let toast = new bootstrap.Toast(
            document.getElementById("fraseToast"),
            { delay: 8000 }
        );

        document.getElementById("fraseToast")
            .addEventListener("shown.bs.toast", () => {
                if (sonidoHabilitado) {
                    sound.currentTime = 0;
                    sound.play().catch(() => {});
                }
            });

        toast.show();
    });
}); 