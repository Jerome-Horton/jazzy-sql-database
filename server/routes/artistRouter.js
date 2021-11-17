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
    const sqlText = 'SELECT * FROM artist;'
    pool.query(sqlText)
      .then((dbRes) => {
        const artistFromDb = dbRes.rows;
        res.send(artistFromDb)
      }).catch((dbErr) => {
        console.error(dbErr);
      });
  });

router.post('/', (req, res) => {
    artist.push(req.body);
    res.sendStatus(201);
});

module.exports = router;