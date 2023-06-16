const numero1 = parseInt (prompt('Escribe un numero'));
const numero2 = parseInt (prompt('Escribe otro numero'));

if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}`)
} else if (numero1 < numero2) {
    console.log(`${numero1} es menor que ${numero2}`)
} else {
    console.log(`${numero1} es igual a ${numero2}`)
}
