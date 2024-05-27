
function nombreResolucion (ancho, alto){
    if (ancho > 7680 && alto >4320){
        return '8K'
    }else if (ancho > 3840 && alto >2160){
        return '4K'
    }else if (ancho > 2560 && alto >1440){
        return 'WQHD'
    }else if (ancho > 1920 && alto >1080){
        return 'FHD'
    }else{
        return 'HD'
    }
}

let nombre = nombreResolucion (1366,768);
console.log(nombre);


//Resolucion mas corta con operador ternario

function nombreResolucion(ancho, alto) {
    return (ancho > 7680 && alto > 4320) ? '8K' :
           (ancho > 3840 && alto > 2160) ? '4K' :
           (ancho > 2560 && alto > 1440) ? 'WQHD' :
           (ancho > 1920 && alto > 1080) ? 'FHD' : 'HD';
}

let nombres = nombreResolucion(1366, 768);
console.log(nombres);
