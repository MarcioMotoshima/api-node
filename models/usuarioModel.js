'use strict'
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usuarioModel = new schema({
    nome:{trim:true, index:true, required:true, type: String },
    email:{trim:true, required:true, type: String },
    cpf:{trim:true, index:true, required:true, type:Number , unique:true},
    senha:{trim:true, required:true, type: String },
    perfil:{index:true, required:true, type: Number },
    tel:{trim:true, required:true, type: String },
    niver:{trim:true, required:true, type: String },
    loja:{trim:true, required:true, type: String },
    ponto:{ required:true, type: Number },
    datac:{type:Date, default:Date.now },
    tentativa:{required:true, type: Number },
    info:{required:true, type: String },    
},{ versionKey: false});

usuarioModel.pre('save', next => {
    let agora = new Date();
    if (!this.datac)
        this.datac = agora;
    next();
});
module.exports = mongoose.model('Usuario', usuarioModel); 