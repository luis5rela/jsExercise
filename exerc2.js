// 2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
let idade= 20
function idadePessoa (idade){
    if (idade >= 18){
        return `É maior de idade`;
    } else{
        return `É menor de idade`;
    }
}
console.log(idadePessoa(idade))