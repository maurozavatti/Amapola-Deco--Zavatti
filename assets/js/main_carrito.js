let title = document.getElementById ("titulo_ppal"); 
title.className = "bg-warning text-white text-center"; 
let subTitulo = document.getElementById ("sub_titulo"); 
console.log(title.innerHTML);
console.log(subTitulo.innerText);

subTitulo.className = "text-center fw-bold fs-3";

function renderProductosCarrito() {
    let productos = obtenerProductosCarrito();
    let contenidoHTML =  `<p class= "alert alert-danger text-center" role"alert">No hay Productos en el Carrito de Compra</p>`;

    if (productos.length > 0) {
        contenidoHTML = `<table class="table mt-5">
        <p class="text-end"><a href="#" class="btn btn-warning border-dark mt-4 fw-bold" onclick="vaciarCarrito()" title="Vaciar Carrito">Vaciar Carrito</a></p>`;
      let total = 0;

      for (let producto of productos){
          let precio = producto.precio * producto.cantidad;
          contenidoHTML += `<tr>
          <td><img src="img/${producto.imagen}" class=""${producto.nombre}" width="60"></td>
          <td class="align-middle">${producto.nombre} X ${producto.cantidad}</td>
          <td class="align-middle">$${precio}</td>
          <td class="text-end"><a href="#" class="btn btn-warning border-dark mt-4" onclick="eliminarCarrito(${producto.id})"><img src="../assets/img/trash.svg" width"40"></a></td>
          </tr>`; 
          total += precio;
      }

      contenidoHTML += `<tr>
      <td>&nbsp;</td>
      <td class="align-middle">Total</td>
      <td class="align-middle">$${total}</td>
      <td class="text-end"><a id="finalizar" href="#" class ="btn btn-warning fw-bold border-dark" onClick="finalizarCompra()"> Finalizar </a&nbsp;</td>
      </tr>`
      contenidoHTML += `</table>`
      
    }

    document.getElementById ("productos_carrito").innerHTML = contenidoHTML;  
} 


actualizarBotonCarrito();
renderProductosCarrito();





