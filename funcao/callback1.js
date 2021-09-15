const fabricantes = ["Mercedes", "Audi", "BMW"]

// não pode inverter a ordem dos parametros o indice nunco como primeiro parametro, se não o resultado vai ser ao contrario
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))



let numeros = [1, 2, 3, 4, 5]

function dobro(numero, indice) {
    console.log(`${indice + 1}. ${numero * 2}`)
}

numeros.forEach(dobro)