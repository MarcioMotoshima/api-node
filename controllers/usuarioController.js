'use strict'
require('../models/usuarioModel');
const mongoose = require('mongoose');
const produto = mongoose.model('Usuario');
function usuarioController(){

}

usuarioController.prototype.get = async (req, res)=> {
    res.status(200).send("usuario");
};
usuarioController.prototype.getById = async (req, res)=> {
    res.status(200).send(`O id passado foi ${req.params.id}`);
};
usuarioController.prototype.post = async (req, res)=> {};
usuarioController.prototype.put = async (req, res)=> {};
usuarioController.prototype.delete = async (req, res)=> {};

module.exports = usuarioController;