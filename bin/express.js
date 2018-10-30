const express = require('express');
const bodyParser = require('body-parser');


//rotas
const produtoRouter = require('../routes/produtoRouter');
const destaqueRouter = require('../routes/destaqueRouter');
const usuarioRouter = require('../routes/usuarioRouter');

//invocando api do express
const app = express();

//configuracao de parse do json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//configurando as rotas
app.use('/api/produto', produtoRouter);
app.use('/api/destaque', destaqueRouter);
app.use('/api/usuario', usuarioRouter);


//Exportando nossa api
module.exports = app;