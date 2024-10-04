let userName = getFirstName ("Sofia-F-Samurai", "-") //splitChar separa a partir do traço "-"
console.log("Seja bem vindo, " + userName)
console.log("Seja bem vindo, " + userName)

userName = getFirstName ("Safira F Samurai", " ") //splitChar separa a partir do espaço " "
console.log("Seja bem vindo, " + userName)

// split - função de separação 
// uso de parâmentros e return

function getFirstName (name, splitChar){
    let firstName = name.split (splitChar) [0]
    return firstName
}

