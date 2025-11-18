const Salao = require("../models/salaoModel");
const Servico = require("../models/servicoModel");
const mongoose = require('mongoose');

const registerSalao = async (req, res) => {
    try {
        const salao = await new Salao(req.body).save();

        res.status(201).json({ salao });

    } catch (e) {
        res.status(422).json({ error: true, message: e.message })
    }
};

const getSalaoPorId = async (req, res) => {
    try {
        const { salaoId } = req.params;
        const servicos = await Servico.find({ salaoId, status: "A" }).select('_id titulo');

        res.status(200).json({
            servicos: servicos.map(s => ({ label: s.titulo, value: s._id }))
        });

    } catch (e) {
        res.status(422).json({ error: true, message: e.message })
    }
};

module.exports = {
    registerSalao,
    getSalaoPorId,
};
