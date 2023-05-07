import { productoServicios } from "../servicios/producto-servicio.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        console.log("error")
    }

    const imagen = document.querySelector("[data-imagen]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");



    productoServicios.detalleManga(id).then( (manga) => {
        imagen.value = manga.imagen;
        nombre.value = manga.nombre;
        precio.value = manga.precio;
        descripcion.value = manga.descripcion;
    });
};

obtenerInfo();

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector("[data-imagen]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    productoServicios.actualizarManga(imagen, nombre, precio, descripcion, id).then(() => {
        window.location.href = "/productos.html";
    });
});