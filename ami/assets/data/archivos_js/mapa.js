let mapa;
let servicioRutas;
let renderizadorRutas;

/* Ubicación fija del negocio */

let ubicacionNegocio = {
    lat: 10.0163,
    lng: -84.2190
};

function iniciarMapa() {

    mapa = new google.maps.Map(
        document.getElementById("mapa"),
        {
            center: ubicacionNegocio,
            zoom: 15
        }
    );

    /* Crear servicios de rutas */

    servicioRutas =
        new google.maps.DirectionsService();

    renderizadorRutas =
        new google.maps.DirectionsRenderer();

    renderizadorRutas.setMap(mapa);

    /* Marcador del negocio */

    new google.maps.Marker({
        position: ubicacionNegocio,
        map: mapa,
        title: "Ubicación del negocio"
    });

}

/* Función para calcular ruta */

function trazarRuta() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            function(posicion) {

                let ubicacionUsuario = {

                    lat: posicion.coords.latitude,
                    lng: posicion.coords.longitude

                };

                let solicitudRuta = {

                    origin: ubicacionUsuario,
                    destination: ubicacionNegocio,
                    travelMode: "DRIVING"

                };

                servicioRutas.route(
                    solicitudRuta,
                    function(resultado, estado) {

                        if (estado === "OK") {

                            renderizadorRutas.setDirections(resultado);

                        } else {

                            alert("No se pudo calcular la ruta");

                        }

                    }
                );

            }
        );

    } else {

        alert("Geolocalización no soportada");

    }

}