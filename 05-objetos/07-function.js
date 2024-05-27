//constructor function nos ayudara
//ayudara a reutilizar codigo

function Punto (x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){console.log('Dibujando');}
}

//cordenada , extender objetos 

let punto = {z:7}

//Punto.call(punto,1,2); ->se pasan uno a uno

//apply se pasan como array
Punto.apply(punto,[1,2]);

console.log(punto);


//no usarlo
/* const Point = new Function('x', 'y',`
this.x = x;
    this.y = y;
    this.dibujar = function(){console.log('Dibujando')};
`);

const p = new Point (1,2);
console.log(p); */


