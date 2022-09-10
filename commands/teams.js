module.exports = {
    name: 'teams',
    description: "displays all teams in stupid bot",
    execute(message, args){
        peopleList = client.commands.get('stupidbot').getTeams();
        message.channel.send();
    }
}