const express = require('express');
const routes = express.Router();
const Busboy = require('busboy');
const aws = require('../services/aws');
const Arquivo = require("../models/arquivo");
const Servico = require("../models/servico");

routes.post('/', async (req, res) => {

    let busboy = new Busboy({headers: req.header});
    busboy.on('finish', async () => {
        try {
            const { salaoId } = req.body;
            let errors = [];
            let arquivos = [];

            if(req.files && Object.keys(req.files) > 0){
                for(let key of Object.keys(req.files)){
                    const file = req.files[key];
                    const nameParts = file.name.split('.');
                    const fileName = `${new Date().getTime()}.${nameParts[nameParts.length - 1]}`;
                    const path = `servicos/${salaoId}/${fileName}`;

                    const response = await aws.uploadToS3(file, path);

                    if(response.error){
                        errors.push({error: true, message: response.message} );
                    }else{
                        arquivos.push(path);
                    }
                }
            }

            if(errors.length > 0){
                res.json(errors[0]);
                return false;
            };

            // Criar Servico
            let jsonServico = JSON.parse(req.body.servico);
            jsonServico.salaoId = req.body.salaoId;
            const servico = await new Servico(jsonServico).save();

            // Criar Arquivo
            arquivos = arquivos.map((arquivo) => ({
                referenciaId: servico._id,
                model: 'Servico',
                arquivo,
            }));

            await Arquivos.insertMany(arquivos);

            res.json({ error: false, arquivos });

        } catch (e) {
            res.json({ error: true, message: e.message })
        }
    });

    req.pipe(busboy);
});


module.exports = routes;