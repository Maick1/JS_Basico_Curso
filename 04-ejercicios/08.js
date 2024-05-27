/*
crear algoritmo que tome un array de
objetos y devuelva un array de pares */

let array = [{
    id : 1,
    name: 'Geordy',
},
{
    id: 2,
    name: 'Michael',
},
{
    id: 3,
    name: 'Veronica',
},
{
    id: 4,
    name: 'Nelu',
},
{
    id: 5,
    name: 'Ron',
},
{
    id: 6,
    name: 'Alexia'
}];

function toPairs(arr){
    let pairs = [];

    for (idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }

    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);