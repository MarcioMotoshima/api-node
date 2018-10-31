'use strict'
require('../models/produtoModel');
const repository = require('../repositories/produtoRepositorio');

function produtoController(){

}
produtoController.prototype.get = async (req, res)=> {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
};
produtoController.prototype.getById = async (req, res)=> {
    let produto = await new repository().findById(req.params.id);
    res.status(200).send(produto);
};
produtoController.prototype.post = async (req, res)=> {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};
produtoController.prototype.put = async (req, res)=> {
    let resultado = new repository().update(req.params.id, req.body); 
    res.status(202).send(resultado);
};
produtoController.prototype.delete = async (req, res)=> {
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = produtoController;