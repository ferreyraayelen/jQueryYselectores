
document.getElementById("carrito").appendChild(contenedor);
document.getElementById(`${serv.id}`).onclick = () => agregarAlCarro(`${serv.id}`);


<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div>



let contenedor = document.createElement("div");
contenedor.innerHTML = `< h4 > Servicio: ${serv.nombreServicio} </ >
    <p> Descripción: ${serv.descripcion}</p>
    <img src="${serv.foto}" width="250px" height="250px">
    <h4> Precio $: ${serv.precio} </h4>
    <button id = "${serv.id}" class='btn btn-secondary'>Comprar</button>`;
document.getElementById("carrito").appendChild(contenedor);
document.getElementById(`${serv.id}`).onclick = () => agregarAlCarro(`${serv.id}`);
}










//redenrizado de los servicios (plantilla literal)
for (const serv of servicioWeb) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h4> Servicio: ${serv.nombreServicio} </h4>
    <p> Descripción: ${serv.descripcion}</p>
    <img src="${serv.foto}" width="250px" height="250px">
    <h4> Precio $: ${serv.precio} </h4>
    <button id = "${serv.id}" class='btn btn-secondary'>Comprar</button>`;
    document.getElementById("carrito").appendChild(contenedor);
    document.getElementById(`${serv.id}`).onclick = () => agregarAlCarro(`${serv.id}`);
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

let botonComprarLP = document.getElementById("comprarLP");








