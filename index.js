import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import axios from "axios"
import ejs from 'ejs';
import { stringify } from 'querystring';
import { nextTick } from 'process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const URL = 'https://v2.jokeapi.dev/joke/';

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());

app.get('/', (req, res) =>
{
    res.render('index.ejs')
});

function setType(x)
{
    const type1 = document.getElementById('type-1');
    const type2 = document.getElementById('type-2');

    if (x == 'single')
    {
        type1.setAttribute('active');
    }
    else if (x == 'twopart')
    {
        type2.setAttribute('active');
    }

}

app.post('/submit', async (req, res) =>
{
    try
    {
        const category = req.body.category;
        const type = req.body.type
        const response = await (axios.get(URL + category + "?type=" + type));
        const data = response.data;

        console.log(type)
        const twoPartQuestion = data.setup;


        let actionButton = "";
        if (twoPartQuestion)
        {
            const lowerTwoPartQuestion = twoPartQuestion.toLowerCase();
            if (lowerTwoPartQuestion.includes('why') == true)
            {
                actionButton = "Why?";
            }
            else if (lowerTwoPartQuestion.includes('who') == true)
            {
                actionButton = "Who?";
            }
            else if (lowerTwoPartQuestion.includes('what') == true)
            {
                actionButton = "What?";
            }
            else if (lowerTwoPartQuestion.includes('when') == true)
            {
                actionButton = "when?";
            }
            else
            {
                actionButton = "???";
            };
        }

        console.log(data)
        res.render('index.ejs', { data, actionButton, type, category });

    }
    catch (err)
    {
        console.log("error = " + err.message)
    }
});

app.listen(port, console.log(`Succesfully connected via = ${port}`));