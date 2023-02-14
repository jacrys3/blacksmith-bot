module.exports = {
    name: 'help',
    description: "displays all commands and what they do",
    execute(message, args) {
        message.channel.send('$stupid - say something stupid (follow $stupid with a name and stupid bot will include them in the message)\n$bingus - show bingus\n$youtube - show link to youtube\n$twitch - show link to twitch\n$people - displays all people in stupid bot\n$prompt - displays all prompts currently in stupid bot (follow $prompt with a number (1-3) and it will only display certain prompts)\n$teams - displays all teams in stupid bot\n$help - displays all commands and what they do');
    }
}