const express = require('express');
const router = express.Router();
//metodo vindo do controle o metodo de inserir
const postar = require('../models/schema')

router.get('/', async (req, res) => {
    try{
        const dev = await postar.find();
        return res.send({dev});
    }catch(err){
        return res.status(400).send({error: "error"})
    }
})

router.post('/', async (req, res) =>{
    try{
        const {name, description} = req.body;
        const dev = await postar.create({
            name, 
            description
        })
        return res.send({dev})
    }catch(err){
        return res.status(400).send({error: 'erro ao inserir!'})
    }
});

router.get('/:devId', async (req, res) =>{
    try{
        const dev = await postar.findById(
            req.params.devId
        )
        return res.json(dev)
    }catch(err){
        return res.status(400).send({error: 'erro ao inserir!'})
    }
});

module.exports = router;