/* indice validar que no sea menor a cero y que el
elemento exista en el array */

function getbyIdx(arr, idx){
    //validar indice y la longitud
    if(idx < 0 || arr.length <=idx){
        return 'Elemento no Existe';
    }

    return arr[idx];

}
let resultado = getbyIdx([1,2],1);
console.log(resultado);