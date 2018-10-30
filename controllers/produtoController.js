'use strict'
function produtoController(){

}

produtoController.prototype.get = async (req, res)=> {
    res.status(200).send("produto");
};
produtoController.prototype.getById = async (req, res)=> {
    res.status(200).send(`O id passado foi ${req.params.id}`);
};
produtoController.prototype.post = async (req, res)=> {};
produtoController.prototype.put = async (req, res)=> {};
produtoController.prototype.delete = async (req, res)=> {};

module.exports = produtoController;