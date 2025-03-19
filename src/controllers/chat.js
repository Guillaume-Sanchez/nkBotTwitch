const chatBot = (client) => {
    client.on('chat', (channel, user, message, self) => {
    if (self) return;
    switch (message) { 
        case '!hello':
            try {
                client.say(channel, `Bonjour @${user.username} !`);
            }
            catch (err) {
                console.log("error : " + err);
            }
            break;
        case '!help':
            try {
                client.say(channel, `Liste des commandes disponnible : !hello, !discord, !steam, !youtube`);
            }
            catch (err) {
                console.log("error : " + err);
            }
            break;
        case '!discord':
            try {
                client.say(channel, `@${user.username}, https://www.youtube.com/channel/UCvZK1Y8m2JvF5bJ8wJ7j9gA`);
            }
            catch (err) {
                console.log("error : " + err);
            }
            break;
        case '!steam':
            try {
                client.say(channel, `@${user.username}, https://steamcommunity.com/groups/nkstreamcommunity`);
            }
            catch (err) {
                console.log("error : " + err);
            }
            break;
        case '!youtube':
            try {
                client.say(channel, `@${user.username}, https://www.youtube.com/channel/UC4qimk1HOCPGc6sFSNalwzA `);
            }
            catch (err) {
                console.log(err);
            }
            break;
        }
    });
};

export default chatBot;