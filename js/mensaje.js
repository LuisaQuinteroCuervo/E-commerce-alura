(function(){

    var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');

    var validarNombre = function(e){
        if(formulario.nombre.value == 0){
            alert("Complete el campo nombre");
            e.preventDefault();
        }
    };

    var validarMensaje = function(e){
        if(formulario.mensaje.value == 0){
            alert("Complete el campo mensaje");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarMensaje(e);
    };

    formulario.addEventListener("submit", validar);
}())