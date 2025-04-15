const express = require('express');
const routes = express.Router();
const Salao = require("../models/salao");
const Servico = require("../models/servico");

routes.post('/', async (req, res) => {
    try {
        const salao = await new Salao(req.body).save();
        res.json({ salao });
    } catch (e) {
        res.json({ error: true, message: e.message })
    }
});

routes.get('/servicos/:salaoId', async (req, res) => {
    try {
        const { salaoId } = req.params;
        const servicos = await Servico.find({ salaoId, status: 'A' }).select('_id titulo');

        res.json({
            servicos: servicos.map(s => ({ label: s.titulo, value: s._id }))
        });

    } catch (e) {
        res.json({ error: true, message: e.message })
    }
});

module.exports = routes;