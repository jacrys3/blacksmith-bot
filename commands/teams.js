const Discord = require('discord.js');

module.exports = {
    name: 'teams',
    description: "displays all teams in stupid bot",
    execute(message, args) {
        teamList = message.client.commands.get('stupidbot').getTeams.execute(message, args);
        concatMessage = "";

        for (team of teamList) {
            concatMessage = concatMessage + team + "\n";
        }

        const embed = new Discord.MessageEmbed()
            .setColor(0xb92f2f)
            .setTitle('People')
            .setDescription(concatMessage);
        message.channel.send({ embeds: [embed] });
    }
}