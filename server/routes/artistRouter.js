const express = require('express');
const router = express.Router();


// const artistList = [ 
//     {
//         name: 'Ella Fitzgerald',
//         birthdate: '04-25-1917'
//     },
//     {
//         name: 'Dave Brubeck',
//         birthdate: '12-06-1920'
//     },       
//     {
//         name: 'Miles Davis',
//         birthdate: '05-26-1926'
//     },
//     {
//         name: 'Esperanza Spalding',
//         birthdate: '10-18-1984'
//     },
// ]


 // Hey! Write some code here! Go get some data from your database!

 router.get('/', (req, res) => {
    console.log('GET /artist');
    // Hey! Write some code here! Go get some data from your database!
     const sqlText = 'SELECT * FROM artist ORDER BY birthdate DESC;'
     pool.query(sqlText)
       .then((dbRes) => {
         const artistFromDb = dbRes.rows;
         res.send(artistFromDb)
       }).catch((dbErr) => {
         console.error(dbErr);
       });
   })
   
   
   router.post('/', (req, res) => {
    console.log('GET /artist');
     const newArtist = req.body;
     const sqlText = (`
       INSERT INTO "artist"
       ("name", "birthdate")
       VALUES
         ($1, $2);
     `)
     const sqlValues = [
       newArtist.name,
       newArtist.birthdate
     ]
     console.log(sqlText)
     pool.query(sqlText, sqlValues)
       .then((dbRes) => {
         console.log(dbRes);
         res.sendStatus(201);  // OK, CREATED
       })
       .catch((dbErr) => {
         console.error(dbErr);
       })
   });

module.exports = router;

