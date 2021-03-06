const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');


//rotas
const produtoRouter = require('../routes/produtoRouter');
const destaqueRouter = require('../routes/destaqueRouter');
const usuarioRouter = require('../routes/usuarioRouter');

//invocando api do express
const app = express();

//configuracao de parse do json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//configurando a conexao com o banco de dados mongodb

mongoose.connect(variables.Database.conection);


//configurando as rotas
app.use('/api/produto', produtoRouter);
app.use('/api/destaque', destaqueRouter);
app.use('/api/usuario', usuarioRouter);


//Exportando nossa api
module.exports = app;