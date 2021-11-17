const express = require('express');
const router = express.Router();

// const songList = [
//   {
//       title: 'Take Five',
//       length: '5:24',
//       released: '1959-09-29'
//   },
//   {
//       title: 'So What',
//       length: '9:22',
//       released: '1959-08-17'
//   },
//   {
//       title: 'Black Gold',
//       length: '5:17',
//       released: '2012-02-01'
//   }
// ];


// // Require the pg module:
// const pg = require('pg');

// // Create a pool object constructor.
// const Pool = pg.Pool;

// // Create our pool object using the above constructor:
// const pool = new Pool({
//     database: 'song', // the name of database, This can change!
//     host: 'Localhost', // where is your database?
//     // port: 5432, // the port for your database, 5432 is default for postgres
//     // max: 10, // how many connections (queries) at one time
//     // idleTimeoutMillis: 30000 // 30 second to try to connect, otherwise cancel query
// });

// // Log to our console when our pool object makes a connection:
// pool.on('connect', () => {
//     console.log('Postgresql connected');
// });

// // Log to our console when something makes our pool error out:
// pool.on('error', (error) => {
//     console.log('Error with postgres pool', error)
// });

router.get('/', (req, res) => {
 // Hey! Write some code here! Go get some data from your database!
  const sqlText = 'SELECT * FROM song;'
  pool.query(sqlText)
    .then((dbRes) => {
      const songFromDb = dbRes.rows;
      res.send(songFromDb)
    }).catch((dbErr) => {
      console.error(dbErr);
    });
})

router.post('/', (req, res) => {
  song.push(req.body);
  res.sendStatus(201);
});

module.exports = router;