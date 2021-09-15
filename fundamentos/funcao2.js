// Armazenando uma função dentro de uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 4))