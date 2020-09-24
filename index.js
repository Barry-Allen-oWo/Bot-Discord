/* 🍒 Biblioteca Discord.js 🍒 */

const { Client, Collection } = require('discord.js');

/* 🍅 Criando Nosso Client no Discord 🍅 */

const client = new Client();

/* 🍎 Pasta de Configurações 🍎 */

const Configurações = require("./config.json");

/* 🍏 Criando Váriaveis da Pasta de Configurações 🍏 */

const { Prefix } = Configurações;

/* 🍺 Mapas do Cliente 🍺 */

client.commands = new Collection();
client.aliases = new Collection();

/* 🌹 HANDLER 🌹 */

["aliases", "commands"].forEach(Aliase => client[Aliase] = new Collection());
["Commands", "Events"].forEach(File => require(`./Main/${File}`)(client));

/* 🔥 Server.js 🔥 */

["Server"].forEach(Server => require(`./Servers/${Server}`)());

/* 🍑 Logando com o BOT 🍑 */

client.login(process.env.TOKEN);

/* 🍻 Área de Teste! 🍻 */