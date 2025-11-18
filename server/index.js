require("dotenv").config();
const express = require('express');
const morgan = require('morgan'); // Log de requisições HTTP
const cors = require('cors'); // Habilitar CORS
const busboy = require('connect-busboy'); // Para upload de arquivos
const busboyBodyParser = require('busboy-body-parser'); // Para fazer o parser do corpo das requisições com arquivos
const router = require('./src/routes/Router.js');


const port = process.env.PORT || 5000;
const app = express();

//MiddleWares
app.use(morgan('dev')); // Só funcione em ambiente de dev
app.use(express.json()); // Para receber dados em formato JSON
app.use(busboy()); // Para upload de arquivos
app.use(busboyBodyParser()); // Para fazer o parser do corpo das requisições com arquivos
app.use(cors()); // Para permitir requisições de outros domínios
app.use(express.urlencoded({ extended: false })); //

//DB Connection
const db = require("./database.js");

//Routes
app.use(router);

//Middleware de Tratamento de Erros Global:
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ errors: [err.message] });
});

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
