//atajos constructores

//atajo para llamar al constructor

//toodos lo objetos tiene un constructor
let objt = {};

let obj = new Object();

/*
new Array (); []
new String(); "" '' 
new Number(); 1 2
new Boolean(); true false*/

function Usuario (){
    this.name = "Perro Feliz";
}
let user = new Usuario;
console.log(user.constructor);

const s1 = "1+1";
const s2 = new String ("1+1");
//console.log(eval(s1),eval (s2));
console.log(s2.valueOf());