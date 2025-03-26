// .env variables 
import dotenv from 'dotenv';
dotenv.config();
const { TWITCH_CHANNEL_NAME, TWITCH_CHANNEL_CLIENT_ID, TWITCH_CHANNEL_TOKEN, TWITCH_USERNAME, TWITCH_OAUTH, DISCORD_TOKEN } = process.env;
// ===== Twitch : =====
import tmi from 'tmi.js';

// Controllers :
import chatBot from './controllers/twitch/chat.js';
import autoMessage from './controllers/twitch/autoMessage.js';
import checkStreamStatus from './controllers/twitch/status.js';

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

export const client = new tmi.Client(options);
client.connect().catch(console.error);

chatBot();
setInterval(autoMessage, 600000);

// ===== Discord : =====

import {Client, GatewayIntentBits} from 'discord.js';
// Controllers :

import commands from './controllers/discord/commands.js';
import annonceLive from './controllers/discord/annonceLive.js';

// création du client et mise en place des intents
export const clientDiscord = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Pour accèder aux serveurs
        GatewayIntentBits.GuildMessages, // Pour autoriser le bot à lire les messages
        GatewayIntentBits.MessageContent, // Pour autoriser le bot à lire le contenu des messages
    ],
});
// connexion du bot
clientDiscord.login(DISCORD_TOKEN);
clientDiscord.once('ready', () => {
    console.log(`========= ${clientDiscord.user.username} connecté au serveur discord ! =========`);
    clientDiscord.user.setPresence({
        activities: [
            {
                name: 'Faire chier'
            },
        ],
        status: 'online',
    });
//    clientDiscord.guilds.cache.forEach(guild => {
//       console.log(`Guild: ${guild.name}`);
//        guild.channels.cache.forEach(channel => {
//            console.log(` - Canal: ${channel.name} ID: ${channel.id}`);
//        });
//    });
});

commands(clientDiscord);

// Status (Mélangé avec Discord et Twitch)

// Passage de la fonction checkStreamStatus dans un setInterval pour vérifier toutes les minutes si le stream est en ligne ou non.
// wrapperCheckStreamStatus permet de rendre la fonction asycrone pour éviter les erreurs de promesse non résolue.
const wrapperCheckStreamStatus = () =>{
    checkStreamStatus(TWITCH_CHANNEL_NAME, TWITCH_CHANNEL_CLIENT_ID, TWITCH_CHANNEL_TOKEN)
}
setInterval(wrapperCheckStreamStatus, 60000);