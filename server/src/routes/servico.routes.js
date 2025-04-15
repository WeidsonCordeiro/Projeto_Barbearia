const express = require('express');
const routes = express.Router();
const Salao = require("../models/salao");
const Servico = require("../models/servico");

routes.post('/', async (req, res) => {
    try {

    } catch (e) {
        res.json({ error: true, message: e.message })
    }
});


module.exports = routes;