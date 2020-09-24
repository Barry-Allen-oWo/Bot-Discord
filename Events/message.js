/* 🍎 Pasta de Configurações 🍎 */

const Configurações = require("../config.json");

/* 🍓 Bibliotecas 🍓 */

ServerBOT = { Prefix: undefined }

/* 🍓 Começando o Comando! 🍓 */

module.exports = async (client, database, message) => {

    if (message.channel.type == "dm") return;

    if (message.author.bot) return;

    if ( !message.guild.me.permissionsIn(message.channel.id).has(["SEND_MESSAGES"]) ) return;

    ServerBOT.Prefix = "PREFIX DO BOT"

    const args = message.content.slice(ServerBOT.Prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if (message.content.indexOf(ServerBOT.Prefix) !== 0) return;

    let cmd = client.commands.get(command);
		
    if ( !cmd ) cmd = client.commands.get(client.aliases.get(command));
    
    if ( cmd ) cmd.run(client, message, args, database)
}