/*crear un arry de longuitud N, y que sus
elementos sean numeros de 1 hasta N */

/* let longuitud = 7;

function crearArray (n){
    let array = [];
    for (let i=1;i<=n;i++){
        array.push(i);
    }
    return array;
}

let resultado = crearArray(longuitud);
console.log(resultado); */


let longuitud = 7;

function crearArray (n){
    if(n<=0){
        return []
    }
    let arr = [];

    for(let i =0; i < n; i++){
        arr[i] = i + 1;
    }
   
    return arr
}

let resultado = crearArray(longuitud);
console.log(resultado);