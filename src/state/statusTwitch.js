import annonceLive from '../controllers/discord/annonceLive.js';
import { clientDiscord } from '../server.js';

let statusTwitch = { value: false };

const statusTwitchHandler = {
    set(target, property, value) {
        if (target[property] !== value) {
            //console.log(`État changé de ${target[property]} à ${value}`);
            target[property] = value;
            if(value == true){
                annonceLive(clientDiscord);
            }
        }
        return true;
    }
};

const statusTwitchProxy = new Proxy(statusTwitch, statusTwitchHandler);
export default statusTwitchProxy;