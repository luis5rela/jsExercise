/*Exercício 20: Função de Verificação de Palíndromo - Crie uma função ehPalindromo(texto) que retorne true se a palavra for um palíndromo (lê-se igual de trás para frente).*/

function ehPolindromo(texto){

    const textoFormatado = texto.toLowerCase();
    const textoLimpo = textoFormatado.replace(/[^a-z0-9]/g,'');
    const textoInvertido = textoLimpo.split('').reverse().join('');
    
    return textoInvertido === textoLimpo;
}
console.log(ehPolindromo("radar"))

console.log(ehPolindromo("Ame a ema"))

console.log(ehPolindromo("casa"))

console.log(ehPolindromo("Anotaram a data da maratona"))

console.log(ehPolindromo("radar"))