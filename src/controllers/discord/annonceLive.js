const annonceLive = (client) => {
    const channel = client.channels.cache.get('1353829246233084067');
    if (channel && channel.isTextBased()) {
        channel.send('@everyone NkStreamTV est en live sur Twitch ! Venez le rejoindre sur https://www.twitch.tv/nkstreamtv')
            .then()
            .catch(console.error);        }
    else {
        console.error('Canal introuvable ou non textuel.');
    }
}

export default annonceLive;