const listaMangas = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());


const crearManga = (imagen, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ imagen, nombre, precio, descripcion, id: uuid.v4() }),
    });
};

const eliminarManga = (id) => {
    console.log("Eliminar a -->", id);
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    });
};

const detalleManga = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then ((respuesta) => 
    respuesta.json()
    );
};

const actualizarManga = (imagen,nombre,precio,descripcion,id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ imagen, nombre, precio, descripcion}),
    })
    .then(resouesta => resouesta)
    .catch((error) => console.log(error));
};

export const productoServicios = {
    listaMangas,
    crearManga,
    eliminarManga,
    detalleManga,
    actualizarManga,
};


