const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const routes = require('../controllers/controllers');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:456987@cluster0-erwsh.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser: true});

app.use(cors());

app.use('/schema', routes);

app.listen(4545, (req, res) =>{
    console.log('conectado!')
});

module.exports = app;