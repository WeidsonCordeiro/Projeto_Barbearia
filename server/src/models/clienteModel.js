const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: {
        type: String,
        require: [true, 'Nome é obrigatório.']
    },
    telefone: {
        type: String,
        default: null
    },
    email: {
        type: String,
        require: [true, 'Email é obrigatório.'],
    },
    senha: {
        type: String,
        require: [true, 'Senha é obrigatório.'],
    },
    foto: {
        type: String,
        require: [true, 'Foto do Cliente é obrigatório.'],
    },
    status: {
        type: String,
        enum: ['A', 'I'], //A=Ativo, I=Inativo
        require: [true, 'Status do Cliente é obrigatório.'],
        default: 'A',
    },
    sexo: {
        type: String,
        enum: ['M', 'F'], // M=Masculino, F=Feminino
        require: [true, 'Sexo é obrigatório.'],
    },
    dataNascimento: {
        type: String, //YYYY-MM-DD
        require: [true, 'Data de Nascimento é obrigatório.'],
    },
    documento: {
        tipo: {
            type: String,
            enum: ['individual', 'corporation'],
            require: true,
        },
        numero: {
            type: String,
            require: true,
        }
    },
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
}, { collection: 'cliente' });


module.exports = mongoose.model('Cliente', cliente);