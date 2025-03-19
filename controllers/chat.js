const tmi = require ('tmi.js');

exports.chatBot = (client) => {
    client.on('chat', (channel, user, message, self) => {
    if (self) return;
    switch (message) { 
        case '!hello':
            client.say(channel, `Bonjour @${user.username} !`);
            break;
        case '!help':
            client.say(channel, `Comment je peux vous aider @${user.username} ?`);
            client.say(channel, `!hello, !discord, !steam, !youtube`);
            break;
        case '!discord':
            client.say(channel, `@${user.username}, https://www.youtube.com/channel/UCvZK1Y8m2JvF5bJ8wJ7j9gA`);
            break;
        case '!steam':
            client.say(channel, `@${user.username}, https://steamcommunity.com/groups/nkstreamcommunity`);
            break;
        case '!youtube':
            client.say(channel, `@${user.username}, https://www.youtube.com/channel/UC4qimk1HOCPGc6sFSNalwzA `);
            break;
        }
    });
};