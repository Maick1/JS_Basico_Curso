
//un constructor usan UpperCamelCase

//

//{id: 1, recuperarClave: function(){}}
function Usuario (){
    this.id = 1;
    this.recuperarClave = function(){ //metodos cuando la
        //funcion esta en un constructor
        console.log('Recuperar Clave....');
    }
}

//new crea un objeto literal y se vincula el prototipo de la funcion con el objeto
//el objeto se le asigna this  y por ultimo
//si no retorna nada automaticamente retorna this.
let usuario = new Usuario();
console.log(usuario);