//estruturas condicionais 

//condição IF - o conteúdo dentro de IF precisa ser "true"
let Ligado = false

if(Ligado){console.log("executou comando")} //IF é false: não vai rodar
if(1 === 1){console.log("executou comando")}// IF é true: executou comando

console.log("***********")

let possuiOvos = true
let itensComprados = " "
if(possuiOvos){itensComprados = "Leite"}
//Caso possuiOvos seja "true", então haverá um item comprado.

//Condição ELSE - Usado quando if não for atendido
else {console.log("passou na sessão de congelados.")
    itensComprados = "Lasanha congelada"}
console.log("Itens comprados: " + itensComprados)

console.log("***********")
//Condição ELSE IF
let nivelDeFome = 10

if(nivelDeFome === 1){console.log("Você está com pouca fome.")}
else if (nivelDeFome === 2){console.log("Você está com muita fome.")}
else {console.log("Você comeria mais que o pica pau.")}
