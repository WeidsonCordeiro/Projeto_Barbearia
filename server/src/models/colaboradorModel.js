const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
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
        require: [true, 'Foto é obrigatório.'],
    },
    dataNascimento: {
        type: String, //YYYY-MM-DD
        require: [true, 'Data de Nascimento é obrigatório.'],
    },
    sexo: {
        type: String,
        enum: ['M', 'F'], //M=Masculino, F=Feminino
        require: [true, 'Sexo é obrigatório.'],
    },
    status: {
        type: String,
        enum: ['A', 'I'], //A=Ativo, I=Inativo
        require: [true, 'Status é obrigatório.'],
        default: 'A',
    },
    contaBancaria: {
        titular: {
            type: String,
            require: [true, 'Titutlar da Conta é obrigatório.'],
        },
        cpfCnpj: {
            type: String,
            require: [true, 'cpfCnpj da Conta é obrigatório.'],
        },
        banco: {
            type: String,
            require: [true, 'Banco é obrigatório.'],
        },
        tipo: {
            type: String,
            require: [true, 'Tipo da Conta é obrigatório.'],
        },
        agencia: {
            type: String,
            require: [true, 'Agencia da Conta é obrigatório.'],
        },
        numero: {
            type: String,
            require: [true, 'Numero da Conta é obrigatório.'],
        },
        dv: {
            type: String,
            require: [true, 'Digito Verificador da Conta é obrigatório.'],
        },
    },
    recipienteId: {
        type: String,
        require: [true, 'ID é obrigatório.'],
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
}, { collection: 'colaborador' });


module.exports = mongoose.model('Colaborador', colaborador);