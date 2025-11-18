const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        require: true,
    },
    especialidades: [{
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        require: true,
    }],
    colaboradores: [{
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        require: true,
    }],
    dias: {
        type: [Number], //0=Domingo, 1=Segunda, ..., 6=Sábado
        require: true,
    },
    inicio: {
        type: Date,
        require: true,
    },
    fim: {
        type: Date,
        require: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
}, { collection: 'horario' });

module.exports = mongoose.model('Horario', horario);