const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./create_router.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('pokemon');
        const favouritesCollection = db.collection('favourites');
        const favouritesRouter = createRouter(favouritesCollection);
        app.use('/', favouritesRouter)
    })
    .catch(console.error);


app.listen(3000, function() {
    console.log('server running')
})