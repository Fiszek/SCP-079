const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () =>{
  console.log('Bot jest online!');
})

bot.login(token);

client.login(process.env.BOT_TOKEN);
