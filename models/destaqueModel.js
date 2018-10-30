'use strict'
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const destaqueModel = new schema({
    titulo:{trim:true, index:true, required:true, type: String, unique:true },
    datac:{type:Date, default:Date.now },
    info:{required:true, type: String },
    foto:{required:true, type: String },
    
},{ versionKey: false});

destaqueModel.pre('save', next => {
    let agora = new Date();
    if (!this.datac)
        this.datac = agora;
    next();
});
module.exports = mongoose.model('Destaque', destaqueModel); 