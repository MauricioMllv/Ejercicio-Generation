const frase = prompt("Ingresa una frase:");
let conteo = 0;

for (let i = 0; i < frase.length; i++){
    if (frase.charAt(i)=== 'a') 
    conteo++;

} 
console.log(`La letra "a" aparece: ${conteo}`)