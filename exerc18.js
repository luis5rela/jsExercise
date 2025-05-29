/** Exercício 18: Função de Cálculo de IMC - Crie uma função calcularIMC(peso, altura) que calcule o Índice de Massa Corporal. Fórmula: IMC = peso / (altura * altura).*/

function calcularIMC(peso, altura){
    return peso/(altura*altura);
}

console.log(calcularIMC(70,1.75))