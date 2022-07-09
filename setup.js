import fs from 'fs/promises';
import 'dotenv/config'

import {default as getIp} from './modules/osProcess.js';

const ip = getIp()
const port = process.env.PORT || 5000;
const envfile = `../babylon-frontend/.env.local`;
const apiIP = `VUE_APP_API_URL = http://${ip}:${port}/`;
fs.writeFile(envfile, apiIP, 'utf-8', ()=>{});
