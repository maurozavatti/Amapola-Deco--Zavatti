let title = document.getElementById ("titulo_ppal"); 
title.className = "bg-warning text-white text-center"; 
let subTitulo = document.getElementById ("sub_titulo"); 
console.log(title.innerHTML);
console.log(subTitulo.innerText);
subTitulo.className = "text-center fw-bold fs-3";

function validarFormulario() {
    let campo_name = document.getElementById("name").value;
    let campo_phone = document.getElementById("phone").value;
    let campo_address = document.getElementById("address").value;
    let campo_email = document.getElementById("mail").value;

    if (campo_name.length == 0) {
        mostrarErrorCampo("Nombre");
        return false;
    }

    if (campo_phone.length == 0) {
        mostrarErrorCampo("Telefono");
        return false;
    }
    if (campo_address.length == 0) {
        mostrarErrorCampo("Direccion");
        return false;
    }
    if (campo_email.length == 0) {
        mostrarErrorCampo("Email");
        return false;
    }

    guardarDatos();
    mostrarFormEnviado();
}

function mostrarErrorCampo(campo) {
    Swal.fire({
        icon: 'error',
        background: '#fbff00',
        title: 'Error!',
        text: 'Complete el campo ' + campo,
        confirmButtonText: 'Aceptar', 
      });
}

function guardarDatos() {
    let campo_name = document.getElementById("name").value;
    let campo_phone = document.getElementById("phone").value;
    let campo_address = document.getElementById("address").value;
    let campo_email = document.getElementById("mail").value;
    localStorage.setItem("datos_formulario", JSON.stringify({nombre:campo_name, phone: campo_phone, address:campo_address, email:campo_email}));
}

function mostrarFormEnviado() {
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Gracias!',
        text: 'Sus datos fueron enviados correctamente!',
        showConfirmButton: false,
        background: '#ffbb5f',
        width: 600,
        padding: '3em',
        color: 'black',
        timer: 3000
      });
}

/* function eliminarDatos() {
    localStorage.removeItem("datos_formulario");
    console.log("Los datos fueron eliminados!");
} */


document.getElementById("enviarInfo").addEventListener("click", validarFormulario);
