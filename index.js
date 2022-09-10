const Discord = require("discord.js");
const keepOn = require('./server')

const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '$';
var seeCommand = true;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message => {
    client.user.setActivity('Overwatch® Origins Edition', { type: 'PLAYING' });
    if (message.content.toLowerCase() == 'ratio' && message.author.id == '475468852789248010') {
        message.react('👍');
        return;
    }
    if (!message.content.startsWith(prefix) || message.author.bot || message.channelId != '987093051921006692') return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if (command === 'twitch' && seeCommand) {
        seeCommand = false;
        client.commands.get('twitch').execute(message, args);
        setTimeout(() => { seeCommand = true }, 2500);
    } else if (command == 'youtube' && seeCommand) {
        seeCommand = false;
        client.commands.get('youtube').execute(message, args);
        setTimeout(() => { seeCommand = true }, 2500);
    } else if (command == 'bingus' && seeCommand) {
        seeCommand = false;
        client.commands.get('bingus').execute(message, args);
        setTimeout(() => { seeCommand = true }, 2500);
    } else if (command == 'help' && seeCommand) {
        seeCommand = false;
        client.commands.get('help').execute(message, args);
        setTimeout(() => { seeCommand = true }, 2500);
    } else if (command.substring(0, 6) == 'stupid' && seeCommand) {
        seeCommand = false;
        client.commands.get('stupidbot').execute(message, args);
        setTimeout(() => { seeCommand = true }, 2500);
    } else if (command == 'real' && seeCommand) {
        seeCommand = false;
        client.commands.get('real').execute(message, args);
        setTimeout(() => { seeCommand = true }, 2500);
    } else if (command == 'prompts' && seeCommand) {
        seeCommand = false;
        client.commands.get('prompts').execute(message, args);
        setTimeout(() => { seeCommand = true }, 2500);
    } else if (command == 'people' && seeCommand) {
        seeCommand = false;
        client.commands.get('people').execute(message, args);
        setTimeout(() => { seeCommand = true }, 2500);
    } else if (seeCommand) {
        seeCommand = false;
        message.channel.send('huh?');
        setTimeout(() => { seeCommand = true }, 2500);
    }
});

// turn on server
keepOn()

// last line always
client.login(process.env['TOKEN']).catch(console.error)