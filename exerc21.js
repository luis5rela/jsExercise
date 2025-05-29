/**Exercício 10: Função de Média Aritmética - Crie uma função calcularMedia(numeros) que receba um array de números e retorne a média aritmética. */

function calcularMedia(numero){

    const soma= numero.reduce((acumulador, valorAtual)=> {
        return acumulador + valorAtual;
    },0);

    const media = soma/numero.length;

    return Math.round(media*100)/100;
}

console.log(calcularMedia([10, 8, 7]))

console.log(calcularMedia([-10, 0, 10]))

console.log(calcularMedia([10, 90, 7]))