let sonidoHabilitado = false;

const toastElement = document.getElementById("fraseToast");
const sound = document.getElementById("toastSound");

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
document.addEventListener("click", habilitarSonido, { once: true });
document.addEventListener("keydown", habilitarSonido, { once: true });
document.addEventListener("touchstart", habilitarSonido, { once: true });
document.addEventListener("scroll", habilitarSonido, { once: true });

toastElement.addEventListener("shown.bs.toast", () => {

    if (sonidoHabilitado) {

        sound.currentTime = 0;

        sound.play().catch(() => {});

    }

});