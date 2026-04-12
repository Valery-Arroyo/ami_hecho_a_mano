let mapa;
let servicioRutas;
let renderizadorRutas;

let ubicacionNegocio = {
    lat: 10.10722,
    lng: -84.38972
};

function iniciarMapa() {

    mapa = new google.maps.Map(
        document.getElementById("mapa"),
        {
            center: ubicacionNegocio,
            zoom: 15
        }
    );

    servicioRutas =
        new google.maps.DirectionsService();

    renderizadorRutas =
        new google.maps.DirectionsRenderer();

    renderizadorRutas.setMap(mapa);

    new google.maps.Marker({
        position: ubicacionNegocio,
        map: mapa,
        title: "Ubicación del negocio"
    });

}

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