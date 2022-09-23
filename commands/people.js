const Discord = require('discord.js');

module.exports = {
    name: 'people',
    description: "displays all people in stupid bot",
    execute(message, args) {
        peopleList = message.client.commands.get('stupidbot').getPeople.execute(message, args);
        concatMessage = "";
        for (person of peopleList) {
            concatMessage = concatMessage + person + "\n";
        }

        const embed = new Discord.MessageEmbed()
            .setColor(0xb92f2f)
            .setTitle('People')
            .setDescription(concatMessage);
        message.channel.send({ embeds: [embed] });
    }
}