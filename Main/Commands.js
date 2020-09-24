const { readdirSync } = require("fs");

const CreateTable = require("ascii-table");

let Table = new CreateTable("Commands");

Table.setHeading("Commands", "Loading...");

module.exports = (client) => {

    const Commands = readdirSync("./Commands/").filter(Arquivo => Arquivo.endsWith(".js"));

    for ( let Arquivo of Commands ) {

        let Take = require(`../Commands/${Arquivo}`);

        client.commands.set(Arquivo.split(".")[0], Take);

        if (Take.name) {
            client.commands.set(Take.name, Take)
            Table.addRow(Arquivo, "Ok");

        }

        if ( Take.aliases && Array.isArray(Take.aliases) ) {

            if (Take.name) Take.aliases.forEach( Aliase => client.aliases.set(Aliase, Take.name) );

            Take.aliases.forEach( Aliase => client.aliases.set(Aliase, Arquivo.split(".")[0]) );

        }

    }

}