exports.ban = (req, res, next) => {
    client.on('timeout', (channel, username, reason, duration) => {
        if(reason === null) {
            reason = "Bien mérité !";
        } 
        client.say(channel, `@${username} a été banni pour ${duration} secondes pour la raison suivante : ${reason}`);
        client.timeout(channel, username);
    });
};