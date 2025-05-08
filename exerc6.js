/*Desenvolva um programa que receba como entrada um número inteiro que represente um dos 7 dias da semana e imprima na tela se esse dia é útil, final de semana ou inválido. Considere que Domingo é o dia 1 e Sábado o dia 7. */
let dia= 7
switch (dia){
    case dia= 1:
    case dia=7: 
        console.log('Fina de semana')
        break;
    case dia=2:
    case dia=3:
    case dia=4:
    case dia=5:
    case dia=6:
        console.log('Dia útil');
        break;
    default:
        console.log('Inválido')
}