function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        deconto: 0.1
    }
}

console.log(criarProduto('Notebook', 1299))
console.log(criarProduto('Tablet', 500))