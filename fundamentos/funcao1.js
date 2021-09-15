// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 6)
imprimirSoma(2) // NaN pois o segundo valor é undefined
imprimirSoma(2, 3, 4, 5, 6) // soma apenas os dois primeiros valores e ignora os seguintes valores

// Função com retorno
function soma(a, b = 0) {
    return a + b
} 

console.log(soma(3, 9))
console.log(soma(3))