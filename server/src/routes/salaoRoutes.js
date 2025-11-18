const express = require('express');
const router = express.Router();

//Controller
const { registerSalao, getSalaoPorId } = require('../controllers/salaoController');

//Middleware
const validate = require('../middlewares/handleValidation');

//Routes
router.post('/salao', validate, registerSalao);
router.post('/servicos/:salaoId', validate, getSalaoPorId);

module.exports = router;