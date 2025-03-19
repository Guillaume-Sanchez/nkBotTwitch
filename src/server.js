import tmi from 'tmi.js';
import dotenv from 'dotenv';
dotenv.config();

const { TWITCH_USERNAME, TWITCH_OAUTH } = process.env;

// Controllers :
import chatBot from './controllers/chat.js';
import ban from './controllers/ban.js';
import timeout from './controllers/timeout.js';

const options = {
    options: {   
        debug: true 
    },
    connection: {
        reconnect: true,
        cluster: 'aws',
    },
    identity: {
        username: TWITCH_USERNAME,
        password: TWITCH_OAUTH,
    },
    channels: ['NkStreamTV'],
};

const client = new tmi.Client(options);
client.connect().then(() => {
    client.say('NkStreamTV', ' nkTwitchBot est connecté');
});
chatBot(client);