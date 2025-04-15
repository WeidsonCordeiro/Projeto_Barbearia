const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoColaborador = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        require: true,
    },
    colaboradorerId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
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

module.exports = mongoose.model('SalaoColaborador', salaoColaborador);