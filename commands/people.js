module.exports = {
    name: 'people',
    description: "displays all people in stupid bot",
    execute(message, args) {
        peopleList = message.client.commands.get('stupidbot').getPeople.execute(message, args);
        concatMessage = "";
        for (person of peopleList) {
            concatMessage = concatMessage + person + "  ";
        }
        message.channel.send(concatMessage);
    }
}