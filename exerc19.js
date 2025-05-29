/**Exercício 19: Função de Inversão de String - Crie uma função inverterString(texto) que retorne a string invertida. */

function inverterString (texto){
    return texto.split('').reverse().join('');
}

console.log(inverterString("luis"))

console.log(inverterString("Hello"))

console.log(inverterString("Javascript"))

console.log(inverterString("Cabo Verde"))

console.log(inverterString("12345"))

console.log(inverterString("luis"))

/** split ('')------*/
function  dividirstring(texto){
    return texto.split('');
}

console.log(dividirstring("luis"))

console.log(dividirstring("Hello"))

console.log(dividirstring(""))

console.log(dividirstring(","))

/**reverse()------*/

function reverseT(texto){
    return texto.split('').reverse();
}

console.log(reverseT("Luis"))

const fruit= ["Banana", "Laranja", "Maçã", "Manga"];
fruit.reverse();

console.log(fruit)

/**Versão alternativa com loop------ */

function inverterStringManual(texto){
    let invertido = '';
    for (let i = texto.length-1/*5-1=4*/; i>=0; i--){
        invertido += texto[i]
    }

    return invertido;
}
console.log(inverterStringManual("JoãoBastoMendesJacintoCardoLola"))
