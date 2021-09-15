let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

// Sem os parenteses só funciona com um parâmetro
dobro = a => 2 * a// retorno implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro

console.log(ola())