const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')
const app = express();


// Middleware para análise de corpo de solicitação
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

// Rotas
const routes = require('./routes/routes');
const userRoutes = require('./routes/userRoutes');
const sendMail = require('./routes/mailRoutes');

app.use('/login', routes);
app.use('/register', routes);
app.use('/user', userRoutes);
app.post('/sendMail', sendMail);
// app.use('/outra-rota', outraRota);

module.exports = app;