/*function validar(){

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var exC = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    
    if(email != exC.test(email) && password != pass.test(password)){
        
        window.location="productos.html";
        
    }
    
}*/

(function(){

    var form = document.getElementsByName('form')[0],
    elementos = form.elements,
    boton = document.getElementById('btn');
    var exC =  /\w+@\w+\.+[a-z]/;
    var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    var validarEmail = function(e){
        if(form.email.value != exC.test(email)){
            e.preventDefault();
        }
    };

    var validarPassword = function(e){
        if(form.password.value != pass.test(password)){
            e.preventDefault();
            window.location="productos.html";
        }
    };

    var validar = function(e){
        validarEmail(e);
        validarPassword(e);
        
    };
    
    form.addEventListener("submit", validar);
    
}())