const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: "I live!"})
})

server.get('/meeseeks', (req, res) => {
    Meeseeks.get()
        .then(me => {
            res.status(200).json(me);
        })
        .catch(err => {
            res.status(500).json({message: "Retrieving the list can't be done. I'm Mr Meeseeks."})
        })
})

module.exports = server;