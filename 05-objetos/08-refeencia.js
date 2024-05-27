//los objetos  

// let a = {};
// let b = a;

// b.prop = 1
// console.log(a, b);



//js crea 
/* let a = 1;

function suma (n){
    n++
}
suma(a);

console.log(a);
 */

//objetos se poasan por referencias
let a = {prop: 1};

function suma (n){
    n.prop++
}
suma(a);

console.log(a);


//tipos de datos primitivos se copian
//los de referencias se referencias XDDD