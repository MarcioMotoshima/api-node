const mongoose = require('mongoose');
const produtoModel = mongoose.model('Produto');
require('../models/produtoModel');

class produtoRepository {
    constructor(){

    }

    async create(data){
        let produto = new produtoModel(data);
        let resultado = produto.save();
        return resultado;
    }

    async update(id,data){
        await produtoModel.findByIdAndUpdate(id, {$set: data});
        let resultado = await produtoModel.findById(id);
        return resultado;
    }

    async getAll(){
        return await produtoModel.find();
    }

    async getById(id){
        return await produtoModel.findById(id);
    }

    async delete(id){
        return await produtoModel.findByIdAndDelete(id);
    }
}
module.exports = produtoRepository;