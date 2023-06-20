const numero1 = parseInt (prompt('Escribe primer numero'));
const numero2 = parseInt (prompt('Escribe segundo numero'));
const numero3 = parseInt (prompt('Escribe tercer numero'));

if (numero1 > numero2) {
    mayor = numero1
} else if (numero1 < numero2){
    mayor = numero2
} else{
    mayor = numero1 === numero2;
}

if (mayor > numero3) {
    mayor = mayor;
} else if (mayor < numero3) {
    mayor = numero3;
} else {
    mayor = mayor === numero3;
}
   console.log("El numero mayor es "+mayor); 


