const Discord = require('discord.js');

function createMessageBlocks(prompts, type) {
    let mList = [];
    concatMessage = "";
    for (prompt of prompts) {
        if (type == 1) {
            p = prompt[0] + '---' + prompt[1];
        } else if (type == 2) {
            p = prompt[0] + '---' + prompt[1] + '---' + prompt[2];
        } else if (type == 3) {
            p = prompt[0] + '---' + prompt[1];
        }

        if (concatMessage.length + p.length >= 2000) {
            concatMessage = concatMessage + '\n';
            mList.push(concatMessage);
            concatMessage = "";
        }
        concatMessage = concatMessage + p + "\n";
    }
    mList.push(concatMessage)
    return mList
}

function createEmbeds(mList, type) {
    let embeds = []
    let i = 1
    for (m of mList) {
        const embed = new Discord.MessageEmbed()
            .setColor(0xb92f2f)
            .setTitle(type + ' Prompts (' + (i).toString() + '/' + mList.length.toString() + ')')
            .setDescription(m);
        i += 1;
        embeds.push(embed);
    }
    return embeds;
}

module.exports = {
    name: 'prompt',
    description: "displays all prompts for stupid bot",
    execute(message, args) {
        let choice = -1;
        if (message.content.substring(8, 9) != '') {
            num = message.content.substring(8, 9);
            if (num >= '1' && num <= '3') {
                choice = parseInt(num);
            }
            else {
                choice = 0;
                message.channel.send('Not a valid choice for prompts :(');
                return;
            }
        }
        // can put if statements to see if only chose 1 type
        if (choice == 1 || choice == -1) {
            OnePList = message.client.commands.get('stupidbot').getText1.execute(message, args);
            OneBlock = createMessageBlocks(OnePList, 1);
            OneEmbeds = createEmbeds(OneBlock, '1 Person');
            for (embed of OneEmbeds) {
                message.channel.send({ embeds: [embed] });
            }
        }

        if (choice == 2 || choice == -1) {
            TwoPList = message.client.commands.get('stupidbot').getText2.execute(message, args);
            TwoBlock = createMessageBlocks(TwoPList, 2);
            TwoEmbeds = createEmbeds(TwoBlock, '2 Person');
            for (embed of TwoEmbeds) {
                message.channel.send({ embeds: [embed] });
            }
        }

        if (choice == 3 || choice == -1) {
            TeamList = message.client.commands.get('stupidbot').getText3.execute(message, args);
            TeamBlock = createMessageBlocks(TeamList, 3);
            TeamEmbeds = createEmbeds(TeamBlock, 'Team');
            for (embed of TeamEmbeds) {
                message.channel.send({ embeds: [embed] });
            }
        }
    }
}