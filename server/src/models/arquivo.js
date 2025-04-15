const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const arquivo = new Schema({
    referenciaIs: {
        type: Schema.Types.ObjectId,
        refPath: 'model', //Referenciação dinâmica
    },
    model: {
        type: String,
        require: true,
        enum: ['Servico', 'Salao']
    },
    caminho: {
        type: String,
        require: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Arquivo', arquivo);