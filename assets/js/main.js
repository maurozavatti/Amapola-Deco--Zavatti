let title = document.getElementById ("titulo_ppal"); 
title.className = "bg-warning text-white text-center"; 
let subTitulo = document.getElementById ("sub_titulo"); 
console.log(title.innerHTML);
console.log(subTitulo.innerText);
subTitulo.className = "text-center fw-bold fs-3";

let productos = [];

fetch("../assets/js/productos.json")
    .then ((resultado)=> resultado.json())
    .then((data)=> {
        renderProductosHTML(data);
    });


function renderProductosHTML(data) {
    productos = data;
    let contenidoHTML = "";

    for (let producto of productos){
        contenidoHTML += `<div class="col-md-4">
        <div class="card mt-4">
           <a href="link_producto.html?id=${producto.id}"><img src="img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></a>
        <div class="card-body">
          <h5 class="card-title text-center fw-bold">${producto.nombre}</h5>
          <p class="card-text text-center"> $${producto.precio}</p>
          <p class = "text-center"><a href="#" class="btn btn-warning fw-bold" title="Agregar al Carrito" onclick="agregarCarrito(${producto.id})">Comprar</a></p>
        </div>
        </div>
        </div>`;    
    }
    document.getElementById ("productos").innerHTML = contenidoHTML;
    guardarProductosLocalStorage(productos);
    actualizarBotonCarrito();
}



