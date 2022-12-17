// E-Comerce de Teclados para PC.

class Teclado {
    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = parseInt(precio) ;
        this.marca = marca;
        this.disponible = true;
    }
    Vendido(){
        this.disponible = false;
    }
}

const teclados = []; 
let cargaTeclados = prompt ( 'Ingrese los productos a stock, PRESIONE ACEPTAR. Ingrese "listo" al finalizar.' );

while (cargaTeclados != "listo"){
    let nombre = prompt("Ingrese el nombre del teclado: ");
    let marca = prompt("Ingrese la marca del teclado: ")
    let precio = parseFloat (prompt("Ingrese el precio del teclado: "));

    teclados.push(new Teclado(nombre, precio, marca) )

    cargaTeclados = prompt ( 'Producto registrado con exito. Ingrese "listo" si desea finalizar, si no pulse en aceptar. De lo contrario presione aceptar.' );
};

//EJEMPLOS DE CARGA
/* 
AlloyOrigins 60
HyperX
140000
----
K552
RedDragon
13999
----
T-TGK321
T-Dagger
5500 
*/

console.log(teclados)

let buscar = prompt ('¿Desdea buscar un producto? \n Ingrese "si" o "no" ')

if (buscar === "si"){
    let modo = parseInt(prompt('¿Desea buscar por el minimo precio que desee o por marca del teclado? \n Opciones 1 y 2 respectivamente.'))
    if (modo === 1){
        let pMin = parseFloat(prompt("Ingrese el precio minimo: "));
        let tecladosMenorPrecio = teclados.filter((teclados) => teclados.precio < pMin); 
        tecladosMenorPrecio.forEach((teclados) => {
            let mensaje = `
            Nombre: ${teclados.nombre}
            Precio: $${teclados.precio}
            Marca: ${teclados.marca}`;
            alert(mensaje);
        });
    } else if (modo === 2){
        let marca = prompt("Ingrese la marca de telcado que desea buscar: ");
        let encontrado = teclados.find(item => item.marca === nombreEsencia);
        let mensaje2 = `
            Nombre: ${encontrado.nombre}
            Precio: $${encontrado.precio}
            Marca: ${encontrado.marca}`;
        alert(mensaje2);
    }
}else {
    alert("¡Gracias por visitar nuestra tienda!")
}
