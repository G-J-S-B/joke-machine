import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import axios from "axios"
import ejs from 'ejs';
import { stringify } from 'querystring';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const URL = 'https://v2.jokeapi.dev/joke/';

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());

app.get('/', (req, res) =>
{
    res.render('index.ejs', { content: "Hello Content" })
});

app.post('/submit', async (req, res) =>
{
    try
    {
        const category = req.body.category;
        const type = req.body.type
        const response = await (axios.get(URL + category + "?type=" + type));
        const data = response.data;
        console.log(data);

        const question = stringify(data.setup);
        console.log(question);

        res.render('index.ejs', { data });
        next();
    } catch (error)
    {
        console.log(error.data)
    }

});

app.listen(port, console.log(`Succesfully connected via = ${port}`));