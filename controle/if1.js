function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // falso então não imprimi
seForVerdadeEuFalo(null) // falso então não imprimi
seForVerdadeEuFalo(undefined) // falso então não imprimi
seForVerdadeEuFalo(NaN) // falso então não imprimi
seForVerdadeEuFalo('') // falso então não imprimi
seForVerdadeEuFalo(-1) // verdadeiro então ele imprimi
seForVerdadeEuFalo('?') // verdadeiro então ele imprimi
seForVerdadeEuFalo([]) // verdadeiro então ele imprimi
seForVerdadeEuFalo([1, 2]) // verdadeiro então ele imprimi
seForVerdadeEuFalo({}) // verdadeiro então ele imprimi