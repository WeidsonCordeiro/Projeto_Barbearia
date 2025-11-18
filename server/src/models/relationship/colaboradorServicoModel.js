const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        require: true,
    },
    servicoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        require: true,
    },
    status: {
        type: String,
        enum: ['A','I'],
        require: [true],
        default: 'A',
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('ColaboradorServico', colaboradorServico);