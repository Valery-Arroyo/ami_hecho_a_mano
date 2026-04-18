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

            document.addEventListener("mousemove", () => {

                toast.show();

            }, { once: true });

        }
    );

});