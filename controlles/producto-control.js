import { productoServicios } from "../servicios/producto-servicio.js";



const crearNuevaLinea = (imagen, nombre, precio, descripcion, id) => {
    console.log(id);
    const linea = document.createElement("nav");
    const contenido = `
        <ul class="productos__contenido">
            <li><img class="producto__img" src=${imagen} width="100px"><br>
                <a class="producto__name"> ${nombre} </a><br>
                <a class="producto__precio"> ${precio} </a><br>
                <a class="producto__des"> ${descripcion} </a><br>
                <button class="fa-solid fa-trash" style="color: #7e4847;" id="${id}"></button> <a href="editar-prdo.html?id=${id}" class="fa-solid fa-pen" style="color: #7e4847;"></a>
            </li>
        </ul>
    `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productoServicios.eliminarManga(id).then((respuesta) => {
            console.log(respuesta);
        }).catch((error) => alert("Ocurrio un error"));
    });
    
    return linea;
};

const table = document.querySelector("[data-table]")

productoServicios.listaMangas()
    .then((data) => {
        data.forEach(({imagen,nombre,precio,descripcion,id}) => {
            const nuevaLinea = crearNuevaLinea(imagen,nombre,precio,descripcion,id);
            table.appendChild(nuevaLinea);
        });
    })
    .catch((error) => alert("Ocurrio un error"));

