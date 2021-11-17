const express = require('express');
const router = express.Router();


const artistList = [ 
    {
        name: 'Ella Fitzgerald',
        birthdate: '04-25-1917'
    },
    {
        name: 'Dave Brubeck',
        birthdate: '12-06-1920'
    },       
    {
        name: 'Miles Davis',
        birthdate: '05-26-1926'
    },
    {
        name: 'Esperanza Spalding',
        birthdate: '10-18-1984'
    },
]

// Require the pg module:
const pg = require('pg');

// Create a pool object constructor.
const Pool = pg.Pool;

// Create our pool object using the above constructor:
const pool = new Pool({
    database: 'artist', // the name of database, This can change!
    host: 'Localhost', // where is your database?
    // port: 5432, // the port for your database, 5432 is default for postgres
    // max: 10, // how many connections (queries) at one time
    // idleTimeoutMillis: 30000 // 30 second to try to connect, otherwise cancel query
});

// Log to our console when our pool object makes a connection:
pool.on('connect', () => {
    console.log('Postgresql connected');
});

// Log to our console when something makes our pool error out:
pool.on('error', (error) => {
    console.log('Error with postgres pool', error)
});

router.get('/', (req, res) => {
 // Hey! Write some code here! Go get some data from your database!
 res.send(artist);
});

router.post('/', (req, res) => {
    artistList.push(req.body);
    res.sendStatus(201);
});

