import { client } from '../../server.js';

const autoMessage = () => {

    const messages = [
        "Bienvenue dans le stream ! N'oublie pas de follow pour ne rien rater ! 😊",
        "Rejoignez notre Discord pour discuter en dehors des lives : !discord 🎧",
        "Pensez à hydrater ! Même les bots prennent soin de leur circuit. 🤖",
        "Vous aimez le contenu ? Soutenez le stream avec un sub ou un don ! 💰",
        "Les règles du chat : respect, pas de spam, pas de pub et amusez-vous bien ! 📋",
        "Tapez !help pour voir la liste des commandes disponibles. 🆘",
        "Si vous avez des questions, attendez que le streamer réponde. 😂",
        "Clippez les meilleurs moments pour qu'on puisse tous en profiter ! 🎬",
        "Un problème de lag ? Essayez de réduire la qualité du stream. ⚙️",
        "Merci à tous les nouveaux followers et subs, vous êtes les meilleurs ! 🙏"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);

    client.say(
        "NkStreamTV", messages[randomIndex]
    );
};

export default autoMessage;