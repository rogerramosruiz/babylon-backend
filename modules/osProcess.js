import { networkInterfaces } from 'os';
import 'dotenv/config'

function getIp(){
    const nets = networkInterfaces();
    if(nets['Wi-Fi'])
        return nets['Wi-Fi'][1]['address']
    else{
        const error = new Error('ERROR: No se esta conectado a una red Wi-FI');
        console.log('\x1b[31m', error.message, '\x1b[0m');
        throw error;
    }
}


export default getIp;