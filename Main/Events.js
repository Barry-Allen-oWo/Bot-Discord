/* 📘 Bibliotecas 📘 */

const { readdirSync } = require("fs");

/* 🍒 Firebase 🍒 */

const Firebase = require("firebase");

var FirebaseConfig = {
    // DADOS FIREBASE
};

Firebase.initializeApp(FirebaseConfig)

const database = Firebase.database();

module.exports = (client) => {

    const Events = readdirSync("./Events/").filter(Arquivo => Arquivo.endsWith(".js"));

    for ( let Arquivo of Events ) {

        let Take = require(`../Events/${Arquivo}`);

        let EventName = Arquivo.split(".")[0]

        client.on(EventName, Take.bind(null, client, database) );

    }

};