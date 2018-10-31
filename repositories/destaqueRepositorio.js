const mongoose = require('mongoose');
const destaqueModel = mongoose.model('Destaque');
require('../models/destaqueModel');

class destaqueRepository {
    constructor(){

    }

    async create(data){
        let produto = new destaqueModel(data);
        let resultado = produto.save();
        return resultado;
    }

    async update(id,data){
        await destaqueModel.findByIdAndUpdate(id, {$set: data});
        let resultado = await destaqueModel.findById(id);
        return resultado;
    }

    async getAll(){
        return await destaqueModel.find();
    }

    async getById(id){
        return await destaqueModel.findById(id);
    }

    async delete(id){
        return await destaqueModel.findByIdAndDelete(id);
    }
}
module.exports = destaqueRepository;