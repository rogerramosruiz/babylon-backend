<<<<<<< HEAD
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
=======
import fs from 'fs/promises';
import 'dotenv/config'

import {default as getIp} from './modules/osProcess.js';

const ip = getIp()
const port = process.env.PORT || 5000;
const envfile = `../babylon-frontend/.env.local`;
const apiIP = `VUE_APP_API_URL = http://${ip}:${port}/`;
fs.writeFile(envfile, apiIP, 'utf-8', ()=>{});
>>>>>>> a40abb05d8be87cc8b710f26e62c695007f7394c
