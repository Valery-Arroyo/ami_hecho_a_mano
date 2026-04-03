document.addEventListener("DOMContentLoaded", () => {

    fetch("https://raw.githubusercontent.com/Valery-Arroyo/ami_hecho_a_mano/master/ami/assets/data/sobreami.json")
        .then(response => response.json())
        .then(data => {

            const contenedorImagenes = document.getElementById("imagenes-ami");
            const contenedorTexto = document.getElementById("texto-ami");

            contenedorImagenes.innerHTML = "";
            contenedorTexto.innerHTML = `<h3>Más que crochet...</h3>`;

            data.imagenes.forEach((item) => {
                contenedorImagenes.innerHTML += `
        <div class="img-item">
            <img src="${item.imagen}" alt="${item.nombre}">
        </div>
    `;
            });

            data.sobreAmi.parrafos.forEach(parrafo => {
                contenedorTexto.innerHTML += `<p>${parrafo.texto}</p>`;
            });

        })
        .catch(error => console.error("Error:", error));

});