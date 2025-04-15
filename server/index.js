const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('./database')

//MiddleWares
app.use(morgan('dev')); // Só funcione em ambiente de dev)
app.use(express.json()); // Para receber dados em formato JSON
app.use(cors()); // Para permitir requisições de outros domínios

//Variables
app.set('port', 8000);

//Rotas
app.use('/salao', require('./src/routes/salao.routes'));

app.listen(app.get('port'), () => {
    console.log(`Servidor rodando em http://localhost:${app.get('port')}`);
})
