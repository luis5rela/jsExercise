// 3. Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

function palavra(string){
    const stringInvertida = string.split("").reverse().join("")
    return string.toLowerCase() === stringInvertida.toLowerCase();
}
let string = "socos"
console.log(palavra(string))
console.log(palavra("socos"))
console.log(palavra("casa"))