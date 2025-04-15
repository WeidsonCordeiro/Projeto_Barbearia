const express = require('express');
const routes = express.Router();
const Salao = require("../models/salao");

routes.post('/', async (req, res) => {
try{
    const salao = await new Salao(req.body).save();
    res.json({salao});
}catch(e){
    res.json({error: true, message: e.message})
}
});

module.exports = routes;