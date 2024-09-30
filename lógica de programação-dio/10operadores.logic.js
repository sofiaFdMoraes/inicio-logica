const espaco = "***********"
//Operadores lógicos

//Operador AND "&&"
let idade = 18
let vistoVerificado = true
let resultado = (idade >= 18) && (vistoVerificado === true)
console.log(resultado)

let moedasColetadas = 100
let item = "estrela"
resultado = (moedasColetadas === 100) && (item === "estrela")
console.log(resultado)

console.log(espaco)
//Operador OR "||"

//personagem poderá sair com sol OU com guarda chuva
let tempo = "chuva"
item = "guarda chuva"
let pode = (tempo !== "chuva") || (item === "guarda chuva")
console.log("Nosso personagem pode sair? " + pode)

console.log(espaco)
//Operador NOT "!"
tempo = "sol"
resultado = tempo !== "chuva" //é diferente
console.log(resultado)

tempo = "chuva"
resultado = tempo === "chuva" 
console.log(!resultado) //inverte o resultado

console.log(espaco)
//combinando "!" e "&&"
tempo = "chuva"
let horario = 8
resultado = !((tempo !== "chuva") && (horario > 6))
console.log(resultado)