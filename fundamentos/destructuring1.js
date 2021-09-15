// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rau ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumerada = true} = pessoa
console.log(sobrenome,bemHumerada)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)