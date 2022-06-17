module.exports = {
    name: 'help',
    description: "displays all commands and what they do",
    execute(message, args){
        message.channel.send('$stupid - say something stupid :D\n$bingus - show bingus\n$youtube - show link to youtube\n$twitch - show link to twitch\n$help - displays all commands and what they do');
    }
}