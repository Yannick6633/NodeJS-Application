// Requete Sans Framework
/*const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-plain');
    res.end(' Hello M2I, vous etes les meilleurs');
});
server.listen(port, host, () => {
    console.log('Server running and I love Christmas');
})*/

// Requete avec Framework Express

const sportRouter = require('./route/sport');
const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;

//Protect from CORS error
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello Baby cart !!');
})

app.get('/json', (req, res) => {
    res.json({msg: 'Ca marche !!'})
})

app.post('/envoi', (req, res) => {
    const  data = req.body;
    res.json(data);
})

app.get('/detail/:id', (req, res) => {
    const id = req.params.id;
    res.json({ id: parseInt(id) })
})

// With Controller
app.use('/sports', sportRouter);

app.listen(port, () => {
    console.log('Hello Baby Cart');
})
