const { Router } = require('express');
//const  { getAllDogs} = require('../controllers/Api_dog_bdall');
const  { onlyTemperament } = require('../controllers/Api_temperament');
const { Dog, Temperament } = require('../db');

const tempRoute = Router();

tempRoute.get('/', async (req, res) => {
   //const allTemp = await  onlyTemperament();
    try {
              
            const tempApi = await onlyTemperament();
            return res.status(200).send(tempApi)
         
              
    } catch (error) {
        res.status(400).send(error.message)
    };
 
    
});

tempRoute.post('/', async (req, res) => {
  const   { name, heightMin, heightMax, weightMin, weightMax, life_span, image, temperament, created, } = req.body;
        if(!name || !heightMin || !heightMax || !weightMin || !weightMax || !life_span || !image) 
            return res.status(404).send("Falta Completar Datos")
        try {
            const createTblDog = await Dog.create({
            name, heightMin, heightMax, weightMin, weightMax, life_span, image, created  
            })
            try {
                const temps = await Temperament.findAll({
                    where:{name: temperament }
                })
                createTblDog.addTemperament(temps)
                res.status(200).send(createTblDog)
             
            } catch (error) {
                res.status(404).send(error.message)
            }
        } catch (error) {
            res.status(404).send(error.message)
        }
})

module.exports = tempRoute