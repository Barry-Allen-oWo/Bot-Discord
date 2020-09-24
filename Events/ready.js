const Configurações = require("../config.json");

module.exports = (client) => {

    /*🍊 Quando ele Ficar Online! 🍊*/

    console.log(`Estou Online!`)

    /*🍓 Criando os Status 🍓*/

    let Status = [
        `STATUS`
    ],
    i = 0
    setInterval(() => {
        client.user.setActivity(`${Status[i ++ % Status.length]}`, {type: "WATCHING"})
    }, 5000)
    
    /* 🏹 Definimos o Status 🏹 */

    client.user.setStatus("dnd")
}