//metodo vindo do controle o metodo de inserir
const postar = require('../models/schema')

module.exports = {
    async index(req, res){
        try{
            const devs = await postar.find();
            return res.json(devs);
        }catch(err){
            return res.status(400).send({error: "error"})
        }
    },

    async show(req, res){
        try{
            const dev = await postar.findById(
                req.params.id
            )
            return res.json(dev)
        }catch(err){
            return res.status(400).send({error: 'erro ao inserir!'})
        }
    },

    async store(req, res){
        try{
            const {_id, name, description} = req.body;
            const dev = await postar.create({
                _id,
                name, 
                description
            })
            return res.json(dev)
        }catch(err){
            return res.status(400).send({error: 'erro ao inserir!'})
        }
    },
}
