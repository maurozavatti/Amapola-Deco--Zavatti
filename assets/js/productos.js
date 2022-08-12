function obtenerProductosLocalStorage(){
   return JSON.parse(localStorage.getItem("productos")) || []; 
}

function guardarProductosLocalStorage (productos){
   localStorage.setItem("productos", JSON.stringify(productos)); 
}

function buscarProducto(id){ 
  let productos = obtenerProductosLocalStorage();
  return productos.find(x => x.id == id);
} 









