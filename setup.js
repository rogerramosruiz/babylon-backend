import { networkInterfaces } from 'os';
import { exit } from 'process';
import * as fs from 'fs';
import 'dotenv/config'

function getIp(){
    const nets = networkInterfaces();
    if(nets['Wi-Fi'])
        return nets['Wi-Fi'][1]['address']
    else{
        const error = new Error('ERROR: No se esta conectado a una red Wi-FI');
        console.log(error.message)
        exit()
    }
}

const ip = getIp()
const port = process.env.PORT || 5000;
fs.writeFile('file.txt', `http://${ip}:${port}`, 'utf-8', ()=>{})
