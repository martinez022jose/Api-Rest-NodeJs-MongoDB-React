const express = require('express');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackdevmiddleware = require('webpack-dev-middleware');
const webpackconfig = require('../webpack.config');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackconfig);
const serverConfig = { serverSideRender: true ,port: process.env.PORT};


require('dotenv').config();

//Initializations
const app = express();
//const {mongoose}= 
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewares
//app.use(webpackdevmiddleware(webpack(webpackconfig)));
app.use(webpackdevmiddleware(compiler));
//app.use(webpackHotMiddleware(compiler));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
//app.use(require('./routes/index.js'));
app.use('/api/movies', require('./routes/movies.js'));
app.use('/api/rickAndMorty', require('./routes/rickAndMorty.js'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen( app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
})