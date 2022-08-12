let title = document.getElementById ("titulo_ppal"); // traigo el elemento titulo
title.className = "bg-warning text-white text-center"; // use propiedad className para modificar estilo del titulo

let subTitulo = document.getElementById ("sub_titulo"); // traigo el elemento subtitulo
console.log(title.innerHTML);
console.log(subTitulo.innerText);
subTitulo.className = "text-center";

