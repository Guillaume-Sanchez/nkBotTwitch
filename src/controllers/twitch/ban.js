const ban = (req, res, next) => {
    client.on('ban', (channel, username, reason) => {
        if(reason === null) {
            reason = "Bien mérité !";
        } 
        client.say(channel, `@${username} a été banni pour la raison suivante : ${reason}`);
        client.ban(channel, username);
    });
};

export default ban;