
people = [
    'Jacrys3',
    'Shadow',
    'Nerfian',
    'Skyy',
    'VotedBubble',
    'Dob',
    'Jvsh',
    'Moots',
    'Juno',
    'Ablazed',
    'Manzana',
    'Beach',
    'Negative',
    'Kilowatt',
    'Rose',
];
text1 = [
    ['', ' hits those on LAN'], 
    ['am i the only one who thinks ', ' is hot?'], 
    ['the things i would do for ', ' to be in a H2O Blast uniform...'],
    ['', ' is my goat 🐐🐐🐐'],
    ['rare ', ' L'],
    ['common ', ' W'],
    ['its so obvious that ', ' is a success at this point'],
    ['its so obvious that ', ' is a bust at this point'],
    ["i'll be the one to say it, ", ' #GOOD'],
    ["i'll be the one to say it, ", ' #BAD'],
    ['today is a great day to love and appreciate ', ''],
    ['we need to start appreciating the things ', ' does'],
    ['for personal reasons, i will be fighting ', ' with my bare fists'],
    ['yall are sleeping on ', '. just you wait'],
    ['', ' wants to play for H2O Blast. they even had bedsheets with their logo on it as a child'],
    ["you just can't hate ", ". you simply can't"],
    ['', ' just deadlifted against you. fold the franchise'],
    ['', ', future role star'],
    ['have yall seen ', "'s gameplay? makes me wanna die 😭"],
    ['its time to bench ', ''],
    ['i hate ', ''],
    ['chad "', '" mcsexy'],
    ['born too late to explore the world, born too early to explore space, but born just in time to watch ', ' play overwatch'],
    ['every day I thank God for sending his child ', ' to show us how to play overwatch'],
    ['i love ', ''],
    ["i have never seen a team with ", " lose. i mean, he's perfect, incredible, good aim, intelligent, handsome... i honestly don't see them losing this tourney"],
    ['i think its hilarious u kids talking shit about ', '. u wouldnt say this shit to him at lan, hes jacked. not only that but he wears the freshest clothes, eats at the chillest restaurants and hangs out with the hottest dudes. yall are pathetic lol'],
    ['', ' is a filthy hog one trick'],
    ['sign ', ' now'],
    ['i want to kiss ', ''],
    ['when is ', ' gonna get dropped'],
    ['cause of death: watching ', "'s gameplay"],
    ['', ' got main tank diffed'],
    ['', ' should be on bronze chat'],
    ['', " fell victim to Juno's smash list"],
    ['', ' hates ball mains'],
    ['', ' will win grand finals mvp'],
    ['', ' loves balls'],
    ['the funniest person in this server has to be ', ' without a doubt'],
    //['', ''],
    //['', ''],
];
text2 = [
    ['', ' needs to take notes from ', ''],
    ['no way people think ', ' is good. ', ' has been better for years now'],
    ['', ' vs ', ' i call that a mid off'],
    ['', ' needs to give ', ' a kiss RIGHT NOW!!'],
    //['', '', ''],
];
text3 = [
    ['watching ', ' has made me reconsider being a Blacksmith Trials fan'],
    ['when i become owner, i will remove ', ' from the league'],
    ['', ' fans, mental health check?'],
    ['', ' will win grand finals'],
    //['', ''],
];
teams = [
    'H2O Blast',
    'Name Lost',
    'San Fransisco Cock',
    'Schizo Stack',
];

module.exports = {
    name: 'stupidbot',
    description: "says stupid things about stupid people :D",
    
    execute(message, args){
        total = text1.length + text2.length + text3.length;
        chance = parseInt(Math.random() * total);
        person1 = parseInt(Math.random() * people.length);
        person2 = parseInt(Math.random() * people.length);
        teamNum = parseInt(Math.random() * teams.length);
        //console.log('chance: ' + chance + ', p1: ' + person1 + ', p2: ' + person2 + ', team: ' + teamNum);
        if(person2 == person1)
        {
            if(person2 == people.length - 1) person2--;
            else person2++;
        }

        if(chance <= text1.length)
        {
            message.channel.send(createMessage1(text1[parseInt(Math.random() * text1.length)], people[person1]));
        }
        else if(chance <= text1.length + text2.length)
        {
            message.channel.send(createMessage2(text2[parseInt(Math.random() * text2.length)], people[person1], people[person2]));
        }
        else
        {
            message.channel.send(createMessage3(text3[parseInt(Math.random() * text3.length)], teams[teamNum]));
        }
    }
}


function createMessage1(text, person) {
    message = text[0] + person + text[1];
    return message;
}

function createMessage2(text, person1, person2) {
    message = text[0] + person1 + text[1] + person2 + text[2];
    return message;
}

function createMessage3(text, team) {
    message = text[0] + team + text[1];
    return message;
}