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