const tmi = require ('tmi.js');
const options = {
    options: {   
        debug: true 
    },
    connection: {
        reconnect: true,
        cluster: 'aws',
    },
    identity: {
        username: 'nktwitchbot',
        password: 'oauth:1jwz6lb0fqtc232u1u3jna4sqe7dj0',
    },
    channels: ['NkStreamTV'],
};

const client = new tmi.client(options);

client.connect();

// Controllers :
const chatBot = require('./controllers/chat');
const ban = require('./controllers/ban');
const timeout = require('./controllers/timeout');


client.on('connected', (address, port) => {
    client.action('NkStreamTV', 'Hello, nkTwitchBot est connecté');
});

chatBot.chatBot(client);

client.on('subscription', (channel, username, method, message, userstate) => {
    client.say(channel, `Merci @${username} pour votre abonnement ! ${method}`);
});

client.on('cheer', (channel, userstate, message) => {
    client.say(channel, `Merci @${userstate.username} pour votre don !`);
});

client.on('raided', (channel, username, viewers) => {
    client.say(channel, `Merci @${username} pour votre raid !`);
});

client.on('hosted', (channel, username, viewers) => {
    client.say(channel, `Merci @${username} pour votre host !`);
});