const commands = (client) => {
    client.on('messageCreate', (message) => {
        if(message.content.startsWith('!')){
            switch (message.content) {
                case '!help':
                    message.reply(
`Voici la liste de toutes les commandes disponibles :
* !help : Affiche la liste des commandes disponibles 🆘
* !ping : Répond pong 🏓
* !twitch : Donne le lien de la chaîne Twitch de NkStreamTV 🎮
* !youtube : Donne le lien de la chaîne Youtube de NkStreamTV 📺
* !discord : Donne le lien du serveur Discord de NkStreamTV 🎧
* !steam : Donne le lien du groupe Steam de NkStreamTV 🎲`);
                    break;
                case '!ping':
                    message.reply('pong');
                    break;
                case '!twitch':
                    message.reply('https://www.twitch.tv/nkstreamtv');
                    break;
                case '!youtube':
                    message.reply('https://www.youtube.com/channel/UC4qimk1HOCPGc6sFSNalwzA');
                    break;
                case '!discord':
                    message.reply('https://discord.gg/J6Kw9mG');
                    break;
                case '!steam':
                    message.reply('https://steamcommunity.com/groups/nkstreamcommunity');
                    break;
            }
        }
        else{
            return;
        }
    });
}

export default commands;