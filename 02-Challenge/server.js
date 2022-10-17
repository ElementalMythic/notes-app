const express = require('express');
const fs = require('fs');

const path = require('path');
const userData = require('./db/db.json');
const uuid = require('uuid');

const app = express();
const PORT = 3001;

// app.use for develop folder

// app.use (express.static('develop'));

// express needs to handle the data parsing 

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// need to make routes 

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/api/notes', (req, res) => {
    const path = './db/db.json';
        const file = fs.readFileSync(path);
            const fileData = file.toString();
                let jsonResponse = JSON.parse(fileData);
});

// need to make notes

// need to make option to post

app.post('/api/notes', (req, res) => {
  
    const noteCreate = JSON.stringify(req.body);
  
        const name = "./db/db.json";
        const pastFile = fs.readFileSync(name);
        const pastData = JSON.parse(pastFile);
        const presentData = [...pastData, req.body];
  
    fs.writeFileSync('./db/db.json', JSON.stringify(presentData));
  
res.json(noteCreate) });

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));



