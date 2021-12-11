//El carrito funciona para turnos, agenda

//Carrito - Array vacio

let carrito = []; //Array vacío

//Creación de títulos para total y para cantidad de productos con JS puro y JQuery

/* let tituloTotalCompra = document.createElement("h4");
tituloTotalCompra.innerText = "Total de tu compra $";
document.getElementById("resumenCompra").appendChild(tituloTotalCompra); */

$("#resumenCompra").append("<h4 style ='margin-left: 1rem'>Total de tu compra $:</h4>"); //JQuery

//------------------//

let montoTotalCompra = document.createElement("h4");
montoTotalCompra.innerText = "0";
document.getElementById("resumenCompra").appendChild(montoTotalCompra);


//------------------//

/* let tituloCantidadProductos = document.createElement("h4");
tituloCantidadProductos.innerText = "Cantidad de productos en el carro:";
document.getElementById("resumenCompra").appendChild(tituloCantidadProductos); */

$("#resumenCompra").append("<h4 style ='margin-left: 1rem'>Cantidad de productos en el carro:</h4>"); //JQuery

//------------------//

let cantidadProductos = document.createElement("h4");
cantidadProductos.innerText = "0";
document.getElementById("resumenCompra").appendChild(cantidadProductos);

//------------------//

//Botón Finalizar compra

$("#botonFinalizarCompra").append("<button class='btn btn bg-secondary', style='color:white; margin-bottom: 1rem;margin-left: 1rem;'>Finalizar Compra</button>");

//redenrizado de los servicios (plantilla literal) por JQueri

for (const serv of servicioWeb) {
    $("#miLista").append(`<li class = "list-group-item">
     <h4 Servicio: ${serv.nombreServicio} </h4>
     <img src="${serv.foto}" width="250px" height="250px">
     <p Descripción: ${serv.descripcion} </p>
     <p> Precio $: ${serv.precio} </p>
     <button id = "${serv.id}" class='btn btn-secondary'>Comprar</button>
    </li>`);
    $("#resumenCompra").append(resumenCompra);
    document.getElementById(`${serv.id}`).onclick = () => agregarAlCarro(`${serv.id}`)
}


//Función muestra el precio total de la compra

botonFinalizarCompra.onclick = () => {
    const precioFinal = montoTotalCompra.innerText;
    Swal.fire("Finalizaste la compra \n Total a abonar $ " + precioFinal);
}


//hoisting (primero lee las variables globales y funciones declaradas con function)
function agregarAlCarro(miId) {
    carrito.push(servicioWeb[miId - 1]);
    //carrito.push(servicioWeb.find(servicio.servicio.id == miId));
    console.log(carrito);
    localStorage.setItem("carritoServicios", JSON.stringify(carrito)); //LocalStorage para que se guarden los productos en el carrito
    calcularTotalCarrito();
}

function calcularTotalCarrito() {
    let total = 0;
    for (const servEnCarro of carrito) {
        total += servEnCarro.precio;
        console.log(total);
    }
    montoTotalCompra.innerText = total;
    cantidadProductos.innerText = carrito.length;
}
