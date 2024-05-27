/* */

const punto = {
    x: 10,
    y: 15,
    //los metodo podemos definir asi:
    dibujar(){
        console.log('Dibujando');
    }
};

//delete punto.dibujar;
//listar propiedades de un objeto dinamico


//preguntar podemos verificar si hay un objeto o metodo
//en particular
if ('dibujar' in punto){
    punto.dibujar();
}

console.log(Object.keys(punto));


//podemos usar of porq es un arrays para acceder a la llave
//y el valor 
for (let llave of Object.keys(punto)){
    console.log(llave,punto[llave]);
}


//nuevooooo
//otro pora acceder
for (let entry of Object.entries(punto)){
    console.log(entry);
}

//un constructor tiene metodo se llama metodo estaticos
