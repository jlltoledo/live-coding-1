// Escribe tu código aquí.


let lista = document.getElementById("lista"); 
let arreglo1 = ["celular", "teclado", "computadora", "anteojos", "bts"];
let arregloVuelta = long("manzana", arreglo1);
  
console.log(arregloVuelta);
document.write(arregloVuelta);

function long(cadena, array){
    let arregloVuelta = [];
    for (let i = 0; i < array.length; i++){
        const element = array[i];
        if(element.length > cadena.length){
            arregloVuelta.push(element)
        }
    }
    return arregloVuelta;
}



