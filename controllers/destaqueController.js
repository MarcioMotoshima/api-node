'use strict'
require('../models/destaqueModel');
const repository = require('../repositories/destaqueRepositorio');

function destaqueController(){

}
destaqueController.prototype.get = async (req, res)=> {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
};
destaqueController.prototype.getById = async (req, res)=> {
    let produto = await new repository().findById(req.params.id);
    res.status(200).send(produto);
};
destaqueController.prototype.post = async (req, res)=> {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};
destaqueController.prototype.put = async (req, res)=> {
    let resultado = new repository().update(req.params.id, req.body); 
    res.status(202).send(resultado);
};
destaqueController.prototype.delete = async (req, res)=> {
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = destaqueController;