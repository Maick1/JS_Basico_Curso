
//com usar la factory  usan camelCase

function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
    
        //Funciona anonima
        recuperarClave: function (){
            console.log('Recuperando Clave');
        },
    
    };

}

let user = crearUsuario ('Michael', 'maick@gmail.com');
let user1 = crearUsuario ('Veronica', 'veronica@gmail.com');

console.log(user,user1);

