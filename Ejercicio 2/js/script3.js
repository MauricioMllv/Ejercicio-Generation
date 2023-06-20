const producto = {
    nombre: "Vestido",
    precio: 400,
    descuento: "10%",
}

console.log(producto);

const {nombre} = producto;
const descuentoAplicado = (400 - 10 * 400 / 100);
    console.log(`El valor del ${nombre} es de ${descuentoAplicado}`)