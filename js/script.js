
let descto;

function asiento(value) {
    let turista;
    let economica;
    let primera;
    let precioUnitario;


    switch (value) {
        case '1': //turista
            turista = true;
            economica = false;
            primera = false;
            precioUnitario = 5000;
            cantidadAsiento(precioUnitario, turista, economica, primera);
            document.getElementById("divEconomica").style.display = "none";
            document.getElementById("divTurista").style.display = "block";
            document.getElementById("divPrimera").style.display = "none";
            break;
        case '2': //economica
            economica = true;
            turista = false;
            primera = false;
            precioUnitario = 9000;
            cantidadAsiento(precioUnitario, turista, economica, primera);
            document.getElementById("divEconomica").style.display = "block";
            document.getElementById("divTurista").style.display = "none";
            document.getElementById("divPrimera").style.display = "none";
            break;
        case '3': //primera
            economica = false;
            turista = false;
            primera = true;
            precioUnitario = 13000;
            cantidadAsiento(precioUnitario, turista, economica, primera);
            document.getElementById("divEconomica").style.display = "none";
            document.getElementById("divTurista").style.display = "none";
            document.getElementById("divPrimera").style.display = "block";
            break;
        default:
            console.log("Opción no válida");
    }
}

function cantidadAsiento(precioUnitario, turista, economica, primera) {
    let cantidadAsiento;

    if (turista) {
        while (true) {
            cantidadAsiento = parseInt(document.getElementById("turista").value);
            document.getElementById("asientoTurista").innerHTML = cantidadAsiento;

            if (cantidadAsiento >= 0) {
                break;
            } else {
                document.getElementById("alert").style.display = "block";
                break;

            }
        }
        let PrecioTotal = precioUnitario * cantidadAsiento;
        document.getElementById("totalTurista").innerHTML = "$ " + PrecioTotal;

        if (cantidadAsiento >= 5) {
            let descto = PrecioTotal * 0.1;
            PrecioTotal = PrecioTotal * 0.9;

            document.getElementById("desct").innerHTML = "$ " + descto;
        }
        document.getElementById("total").innerHTML = "$ " + PrecioTotal;
    }

    if (economica) {

        while (true) {
            cantidadAsiento = parseInt(document.getElementById("economica").value);
            document.getElementById("asientoEconomica").innerHTML = cantidadAsiento;
            if (cantidadAsiento >= 0) {
                break;
            } else {
                document.getElementById("alert").style.display = "block";
                break;

            }
        }
        let PrecioTotal = precioUnitario * cantidadAsiento;
        document.getElementById("totalEconomica").innerHTML = "$ " + PrecioTotal;

        if (cantidadAsiento >= 5) {
            let descto = PrecioTotal * 0.1;
            PrecioTotal = PrecioTotal * 0.9;

            document.getElementById("desct").innerHTML = "$ " + descto;
        }
        document.getElementById("total").innerHTML = "$ " + PrecioTotal;

    }

    if (primera) {
        while (true) {
            cantidadAsiento = parseInt(document.getElementById("primera").value);
            document.getElementById("asientoPrimera").innerHTML = cantidadAsiento;
            if (cantidadAsiento >= 0) {

                break;
            } else {
                document.getElementById("alert").style.display = "block";
                break;

            }
        }
        let PrecioTotal = precioUnitario * cantidadAsiento;
        document.getElementById("totalPrimera").innerHTML = "$ " + PrecioTotal;

        if (cantidadAsiento >= 5) {
            let descto = PrecioTotal * 0.1;
            PrecioTotal = PrecioTotal * 0.9;

            document.getElementById("desct").innerHTML = "$ " + descto;
        }
        document.getElementById("total").innerHTML = "$ " + PrecioTotal;
    }
}

function cerrar() {
    document.getElementById("alert").style.display = "none";
}



