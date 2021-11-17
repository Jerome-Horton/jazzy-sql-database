const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Require my routers:
const artistRouter = require('./routes/artistRouter.js');
const songRouter = require('./routes/songRouter.js');

// ----- /Artist route ---------------
app.use('/artist,', artistRouter);
// ----- /Song route ---------------
app.use('/song,', songRouter);

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//Forward all request to /song to 

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});
