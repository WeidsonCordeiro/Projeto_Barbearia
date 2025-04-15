const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        require: true,
    },
    titulo: {
        type: String,
        require: [true, 'Titulo do Servico é obrigatório.']
    },
    preco: {
        type: Number,
        require: [true, 'Preco do Servico é obrigatório.']
    },
    duracao: {
        type: Number, //Duração em minutos
        require: [true, 'Tempo do Servico é obrigatório.']
    },
    comissao: {
        type: Number, // % de comissão sobre o preço
    },
    recorrencia: {
        type: Number, //Periodo de refação do serviço em dias
    },
    descricao: {
        type: String, 
        require: [true, 'Descricao do Servico é obrigatório.']
    },
    status: {
        type: String,
        enum: ['A','I','E'],
        require: [true, 'Status é obrigatório.'],
        default: 'A',
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('Servico', servico);