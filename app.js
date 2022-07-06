import express from 'express';
import fs from 'fs/promises';
import 'dotenv/config'
import cors from 'cors';

import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.static('./public'));
app.use(express.static('./public/dist'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/public/dist/index.html');
});

app.get('/files', async (req, res)=>{
    var modelsDir = './public/models';
    var dirs = await fs.readdir(modelsDir);
    const data = {};
    for(var i in dirs){
        var dir = dirs[i];
        var files = await fs.readdir(`${modelsDir}/${dir}`)
        var fileData = {}
        for(var j in files){
            var file = files[j];
            var splt = file.split('.');
            splt.pop();
            var name = splt.join('')
            fileData[name] = {'modelURL': `models/${dir}/${file}`};
        }
        data[dir] = fileData;
    }
    res.send(data).status(200)
});


app.listen(port, ()=>{
    console.log('App listening on port '+port)
})

