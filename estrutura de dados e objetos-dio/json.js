// JSON (JAvaScript Object Notation): composto por chave e valor,
// com o objetivo de transferir um determinado agrupamento de dados.


let invoice = {
    name: "Sofia", 
    age: 28,
    products: {
        0: ["mouse 2XWM", 29.90],
        1: ["teclado mecânico", 129.99],
        2: ["monitor", 899.99]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){ 
    console.log(`O comprador é ${invoice.name}.`)     //interpolação
    console.log(`A idade é ${invoice.age}.`)
    
    // para percorrer pela lista:
    for (let index in invoice.products){   
    let[productName, productPrice] = invoice.products[index]
        console.log(` ${productName}: ${productPrice}`)

    }
}
