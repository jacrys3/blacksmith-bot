images = [
    'images/bingus1.jpg',
    'images/bingus2.jpg',
    'images/bingus3.jpg',
    'images/bingus4.jpg',
    'images/bingus5.jpg',
]
module.exports = {
    name: 'bingus',
    description: "displays bingus",
    execute(message, args){
        chance = parseInt(Math.random() * images.length);
        message.channel.send({files: [images[chance]]});
    }
}