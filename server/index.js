const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database')

//MiddleWares
app.use(morgan('dev')); // Só funcione em ambiente de dev)

//Variables
app.set('port', 8000);
 
//Rotas
app.use('/salao', require('./src/routes/salao.routes'));

app.listen(app.get('port'), ()=> {
    console.log(`Servidor rodando em http://localhost:${app.get('port')}`);
})
