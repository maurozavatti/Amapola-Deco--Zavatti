function obtenerProductosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || []; 
  }
  
  function guardarProductosCarrito (productos){
    localStorage.setItem("carrito", JSON.stringify(productos)); 
  }

  function actualizarBotonCarrito(){
    let productos =  obtenerProductosCarrito();
    let contenidoCarrito = `<button type="button" class="btn btn-warning border-dark position-relative ">
    <img src="../assets/img/cart.svg" width="25">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      0
    </span>
  </button>`
    
  let total = 0;

    if(productos.length > 0){
        for(let producto of productos){
            total += producto.cantidad;
        }
        contenidoCarrito = `<button type="button" class="btn btn-warning border-dark position-relative">
        <img src="../assets/img/cart.svg" width="25">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          ${total}
        </span>
      </button>` 
    }
    document.getElementById ("boton_carrito").innerHTML = contenidoCarrito;
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
    renderProductosCarrito();
}

function agregarCarrito(id){
  let productos_carrito = obtenerProductosCarrito();
  let posicion = productos_carrito.findIndex(x => x.id == id);
  if (posicion > -1){
    productos_carrito[posicion].cantidad += 1;
  } else {
    let producto = buscarProducto(id);
    producto.cantidad = 1;
    productos_carrito.push(producto);
  }
  guardarProductosCarrito(productos_carrito);
  actualizarBotonCarrito(); 
}   

function eliminarCarrito(id){
  let productos_carrito = obtenerProductosCarrito();
  let posicion = productos_carrito.findIndex(x => x.id == id); 
  productos_carrito[posicion].cantidad -= 1;

  if (productos_carrito[posicion].cantidad == 0){
    productos_carrito.splice (posicion, 1);
  }
  
  guardarProductosCarrito(productos_carrito);
  actualizarBotonCarrito(); 
  renderProductosCarrito();
}

function finalizarCompra() {
  let compraFinalizada = `
      <div >
      <tr>
        <td><p class="text-center align-middle mt-4"> Por Favor ir al menu "Contacto" y completar Formulario para el envio </p></td>
        <p class="text-center"><a class="btn btn-warning fw-bold border-dark text-center align-middle" href="../pages/Contacto.html">Ir a Contactos</a></p>
      </tr>
        </div>
    </div>
  `;
  document.getElementById ("finalizar_compra").innerHTML = compraFinalizada; 
}