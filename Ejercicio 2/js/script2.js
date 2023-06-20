const calificaciones = {
    nombre: "Juan",
    notas: {
    ingles: 9,
    programacion: 8,
    html: 7,
}
}
console.log(calificaciones);

const {nombre} = calificaciones;
const promedio = (9 + 8 + 7) / 3;
    console.log(`El promedio de ${nombre} es de ${promedio}`)


