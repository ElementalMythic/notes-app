const express = require('express');
const fs = require('fs');

const path = require('path');
const userData = require('./db/db.json');
const uuid = require('uuid');

const app = express();
const PORT = 3001;

// app.use for develop folder

app.use (express.static('develop'));

// express needs to handle the data parsing 

// need to make routes 

// need to make notes

// need to make option to post



