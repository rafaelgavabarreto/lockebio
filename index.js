//Setting app variables
require('dotenv').config({
    path: './.env.' + (process.env.NODE_ENV || 'dev')
});

const express = require('express');
const app = express();
const appRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');

const cors = require('cors');
// app.use(cors());
// app.options('*', cors());

var corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});


app.use(busboy());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(busboyBodyParser());

app.use('/lockebio', appRoutes);

// 3000
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on port ${process.env.SERVER_PORT}!`)
})