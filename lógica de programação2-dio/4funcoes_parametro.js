
torrar ("pão de forma", "Sofia", 10.99) // argumentos na chamada da função

function torrar (pao, nome = "Cliente", valor = 99.90){  

//variável "pao, nome" só existe dentro da chave
// por esse motivo é chamada de parâmetro

    console.log("torrada feita com " + pao 
        + ", é um pedido de " + nome
        + " e o valor total é " + valor + " reais.")
}

// "console.log(pao, nome)" - não funcionaria pq não é uma variável declarada
