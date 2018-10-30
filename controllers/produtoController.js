'use strict'
require('../models/produtoModel');
const mongoose = require('mongoose');
const produto = mongoose.model('Produto');

function produtoController(){

}

produtoController.prototype.get = async (req, res)=> {
    let lista = await produto.find();
    res.status(200).send(lista);
};
produtoController.prototype.getById = async (req, res)=> {
    let produtoEncontrado = await produto.findById(req.params.id);
    res.status(200).send(produtoEncontrado);
};
produtoController.prototype.post = async (req, res)=> {
    let modelo = new produto(req.body);
    let resultado = await modelo.save();
    res.status(201).send(resultado);
};
produtoController.prototype.put = async (req, res)=> {
    await produto.findByIdAndUpdate(req.params.id, { $set: req.body });
    let produtoEncontrado = await produto.findById(req.params.id);
    res.status(202).send(produtoEncontrado);
};
produtoController.prototype.delete = async (req, res)=> {
    let deletado = await produto.findByIdAndRemove(req.params.id);
    res.status(204).send(deletado);
};

module.exports = produtoController;