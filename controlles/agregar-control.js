import { productoServicios } from "../servicios/producto-servicio.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    const imagen = document.querySelector("[data-imagen]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value

    productoServicios.crearManga(imagen,nombre,precio,descripcion).then( () => {
    window.location.href = "/productos.html";
    }).catch(error => console.log(error))
});