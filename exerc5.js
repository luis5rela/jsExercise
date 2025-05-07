const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
}

const base = 3
const expoente = 4
const resultado = calculaPotencia(base, expoente);

console.log(`A resposta de ${base} elevado a ${expoente} é: ${resultado}.`);