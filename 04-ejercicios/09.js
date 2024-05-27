/*Crear algoritmo que devuelva un
array de objetos en base pares */

let pairs = [
    [1,{name: "Geordy"}],
    [2,{name: "Alessia"}],
    [3,{name: "Vero"}],
];

function toCollection(arr){

    let collection = [];

    //accedo al elemento
    for (idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0]
    }

    return collection

}

let resultado = toCollection(pairs);
console.log(resultado);
