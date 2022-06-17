module.exports = {
    name: 'bingus',
    description: "displays bingus",
    execute(message, args){
        // code goes here...
        message.channel.send({files: ['images/bingus.jpg']});
    }
}