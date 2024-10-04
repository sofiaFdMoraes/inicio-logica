createStringConnection("db_products","Sofia", "2124" )


function createStringConnection(databaseName, user, pass){

    // interpolação de strings = feita com crase no inicio "` `"
    // diferente de concatenar que é feito com aspas e "+"

    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}
