//podemos agregarle propiedades mas no cambiarle su constante
const user = {id: 1};

user.name = 'Michael';
user.guardar = function (){
    console.log('Guardando', user.name);
}

user.guardar();

//no modificar el objeto
//const user1 = Object.freeze ({id: 1});

//con seal si cambia con seal
const user1 = Object.seal ({id: 1});
user1.name = 'Michael';
user1.id = 2;
console.log(user1);