const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        require: true,
    },
    clienteId: {
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        require: true,
    },
    servicoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        require: true,
    },
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        require: true,
    },
    data: {
        type: Date,
        require: true,
    },
    comissao: {
        type: Number,
        require: true,
    },
    valor: {
        type: Number,
        require: true,
    },
    transactionId: {
        type: String,
        require: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Agendamento', agendamento);