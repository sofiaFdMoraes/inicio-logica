//estruturas de decisão
//switch/ case/ break/ default

let fruta = "morango"

switch (fruta){
    case "laranja": 
    console.log("suco de laranja")
    break

    case "banana": 
    case "morango": //é possível adicionar mais de um case
    console.log("vitamina de " + fruta)
    break    

    case "maçã":
    console.log("suco de maçã")
    break

    default:
    console.log("suco genérico")
    break
}
 


