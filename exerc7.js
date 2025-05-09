/*Um determinado clube de futebol pretende classificar seus atletas em categorias e para isto ele contratou um programador para criar um programa que executasse esta tarefa. Para isso o clube criou uma tabela que continha a faixa etária do atleta e sua categoria. A tabela está demonstrada abaixo:

IDADE CATEGORIA

De 05 a 10 Infantil

De 11 a 15 Juvenil

De 16 a 20 Junior

De 21 a 25 Profissional

Faça um programa que inicie a variável $idade (atribua um valor a ela) para o programa indicar a categoria. */

//-----------------------------------------
let idade = 5

if(idade>=5 && idade <=10){
   console.log('Infantil');
}else if (idade>=11 && idade <=15){
    console.log('Juvenil');
}else if(idade >= 16 && idade<=20){
    console.log('Junior');
}else if(idade >= 21 && idade<=25){
    console.log('Profissional')
}else{
    console.log('Não existe essa categoria')
}