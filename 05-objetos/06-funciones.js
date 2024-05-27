//objetos de primera clases pueden ser pasada o retornadas
//de otras funciones o pasarlas como argumentos

function Usuario (nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('Michael');

console.log(user);


//pasar argumento
function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, 'Geordy');
console.log(user1);


//retornar otra funcion
function returned (){
    return function () {
        console.log('Hola Mundo');
    }
}

let saludo = returned();
saludo();