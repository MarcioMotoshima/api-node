const mongoose = require('mongoose');
const usuarioModel = mongoose.model('Usuario');
require('../models/usuarioModel');

class usuarioRepository {
    constructor(){

    } 

    async create(data){
        let produto = new usuarioModel(data);
        let resultado = produto.save();
        return resultado;
    }

    async update(id,data){
        await usuarioModel.findByIdAndUpdate(id, {$set: data});
        let resultado = await usuarioModel.findById(id);
        return resultado;
    }

    async getAll(){
        return await usuarioModel.find();
    }

    async getById(id){
        return await usuarioModel.findById(id);
    }

    async delete(id){
        return await usuarioModel.findByIdAndDelete(id);
    }
}
module.exports = usuarioRepository;

