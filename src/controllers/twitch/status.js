import axios from 'axios';

import statusTwitchProxy from '../../state/statusTwitch.js';

const checkStreamStatus = (channelName, clientId, token) => {
    axios.get(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
        headers: {
            'Client-ID': clientId,
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.data.data.length > 0) {
            if(!statusTwitchProxy.status){
                statusTwitchProxy.status = true;
                //console.log('Le stream est en ligne True');
            }
            else{
                //console.log('Le stream est déja en ligne');
                return;
            }
        } else {
            if(statusTwitchProxy.status){
                statusTwitchProxy.status = false;
                 //console.log('Le stream est hors ligne False');
            }
            else{
                //console.log('Le stream est hors ligne');
                return;
            }
        }
      })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        // console.log("tout c'est bien passé !");
    });
}

export default checkStreamStatus;