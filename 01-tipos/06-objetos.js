let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre,
    anime,
    edad,
};

console.log(personaje);

//Acceder
console.log(personaje.nombre);
console.log(personaje['anime']);

//editar
personaje.edad = 13;
//o
personaje['edad']= 16;

//eliminar propiedades
delete personaje.anime;

console.log(personaje)