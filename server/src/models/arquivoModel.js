const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const arquivo = new Schema({
    referenciaId: {
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
}, { collection: 'arquivo' });

module.exports = mongoose.model('Arquivo', arquivo);