//No exemplo a seguir demonstramos como exibir diferentes alimentos de acordo com a necessidade do usuário.

let alimento = "Proteína"
switch(alimento){
    case "Proteína":
        console.log("Carne, leite, aveia, amêndoas")
        break;
    case "Carboidrato":
        console.log("Banana, batata doce,feijão, pão")
        break;
    default:
        console.log("Cuidado com a alimentação!")
}