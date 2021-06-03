//0 - Usar el modo restringido
'use restring';

//1 - Invocamos a express
const express = require('express');
const app = express();

//2 - Seteamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3 - Invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path: './env/.env'});

//4 - Invocamos a public
app.use('/resources', express.static('public'));
app.use('resources', express.static(__dirname + '/public'));

//console.log(__dirname); Para ver donde esta el proyecto.
//5 - Establecemos el motor de plantillas ejs
app.set('view engine', 'ejs');

//6 - Invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

//7 - Variables de session
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true 
}));

//8 - Invocamos al módulo de conexión de la DB
const connection = require('./database/db');

//9 - Estableciendo las rutas
app.get('/', (req, res) => {
    //res.render('index', {msg: 'Esto es un mensaje desde nodejs..'});
    res.render('login', {msg: 'Alberto Bernal'})
});

/*
//Prueba del servidor
app.get('/', (req, res) => {
    res.send('Hola beto y el mundo de js..')
});
*/
//Se crea el servidor
app.listen(3000, (req, res) => {
    console.log('El servidor esta corriendo en http://localhost:3000');
});