import { client } from '../../server.js';

const autoMessage = () => {
    client.say("NkStreamTV", `Salut, n'hésitez pas à envoyer un message dans le chat ! Si vous avez besoin d'aide, tapez !help 😊`);
};

export default autoMessage;