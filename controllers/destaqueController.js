'use strict'
function destaqueController(){

}

destaqueController.prototype.get = async (req, res)=> {
    res.status(200).send("destaque");
};
destaqueController.prototype.getById = async (req, res)=> {
    res.status(200).send(`O id passado foi ${req.params.id}`);
};
destaqueController.prototype.post = async (req, res)=> {};
destaqueController.prototype.put = async (req, res)=> {};
destaqueController.prototype.delete = async (req, res)=> {};

module.exports = destaqueController;