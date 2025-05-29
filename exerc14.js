/*Exercício 14: Função de Soma -Crie uma função somar(a, b) que retorne a soma de dois números. Versão com tratamento de erros (opcional):
*/

function somar (a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Erro: ambos os parâmetros devem ser númerors"
    }
    return a+b; 
}

console.log(1,2)

console.log(somar( 2))

console.log(somar(1, 2))