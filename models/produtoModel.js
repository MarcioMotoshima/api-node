'use strict'
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const produtoModel = new schema({
    nome:{trim:true, index:true, required:true, type: String, unique: true },
    pontos:{required:true, type: Number },
    usuario:{trim:true, index:true, required:true, type: String },
    datac:{type:Date, default:Date.now },
},{ versionKey: false});

produtoModel.pre('save', next => {
    let agora = new Date();
    if (!this.datac)
        this.datac = agora;
    next();
});
module.exports = mongoose.model('Produto', produtoModel); 