let title = document.getElementById ("titulo_ppal"); 
title.className = "bg-warning text-white text-center"; 
let subTitulo = document.getElementById ("sub_titulo"); 
console.log(title.innerHTML);
console.log(subTitulo.innerText);
subTitulo.className = "text-center fw-bold fs-3";


function renderProducto() {
    let url = document.location.search;
    url = url.split("=");
    let producto = buscarProducto(url[1]);
    let contenidoHTML = ` <div class="col-md-4 offset-md-4 text-center mt-5">
        <p> <img src="img/${producto.imagen}" class="img-fluid" alt="${producto.nombre}" width="400"></p>
        <h2 class="fw-bold">${producto.nombre}</h2>
        <h3 class="fw-bold">${producto.destacado}</h3>
        <p class="fw-bold">${producto.descripcion} </p>
        <p class="fs-5 fw-bold">$${producto.precio}</p>
        <p class="fw-bold"><a href="#" class="btn btn-warning fw-bold border-dark" title="Agregar al Carrito" onclick="agregarCarrito(${producto.id})">Comprar</a></p>
        </div>`;
        document.getElementById ("link_producto").innerHTML = contenidoHTML;  
}


actualizarBotonCarrito();
renderProducto();