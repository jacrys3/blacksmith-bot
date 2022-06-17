module.exports = {
    name: 'youtube',
    description: "sends a link to our youtube!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/channel/UC2v3LX8Zd2wsJznD-xeuGGA');
    }
}