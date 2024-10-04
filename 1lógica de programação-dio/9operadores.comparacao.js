const espaco = "*************"

//operadores de igual e diferente

// "==" compara o valor
let numero = "1"  
console.log(numero == 1)  

// "===" compara o valor e o formato do conteúdo 
numero = "1"  //strig
console.log(numero === 1)  //number

// "!=" avalia se um valor é diferente do outro
let marca = "Apple"  
let resultado = marca !== "Samsung" //guardar o valor em uma variável de resultado
console.log(resultado)

console.log(espaco)
//operadores de menor e maior 

// ">" maior que e ">=" maior ou igual a
let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario > idadeMinima
console.log(idadePermitidaValida)

idadePermitidaValida = idadeUsuario >= idadeMinima
console.log(idadePermitidaValida)

// "<" menor que e "<=" menor ou igual a
let idadeDeCorte = 50  
let idadePessoa = 60
let resultadoTerceira = idadeDeCorte < idadePessoa
console.log(resultadoTerceira)

resultadoTerceira = idadeDeCorte <= idadePessoa
console.log(resultadoTerceira)