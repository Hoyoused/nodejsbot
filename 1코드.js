const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzczMDAyNjcxMTAyNjIzNzY0.X6C41g.d0C6vnzWJaHX0X6p_fN91cqyusA';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);