const { Router } = require('express');
const  { getAllDogs, getPaginado} = require('../controllers/Api_dog_bdall');
const { Dog } = require('../db');

const dogsRoute = Router();

dogsRoute.get('/', async (req, res) => {
    const { name } = req.query;
    const  desde = Number(req.query.desde) || 0;
    console.log(desde);
    const allDogs = await  getAllDogs();
    const regXpg = 8;
    if(!getAllDogs) throw new Error('Error al Traer la Data')
    try {

        if(name) { 
            const dogsApii = await allDogs.filter((e) => 
            e.name.toLowerCase().includes(name.toLowerCase()));
                        
         try{  
            res.status(200).send(dogsApii)
         } catch {
            res.status(404).send("El nombre del Dog Buscado no Existe")
         } 

         
        } else{
            //const dogPag = await allDogs
        //const dogPag = allDogs.forEach(function(e){
                //console.log(e)
        //})
        //const obj = Object.entries(dogPag).forEach(([key,value])=>{(key, value)})
        // const obj=Object.entries(dogPag).map(e => {
        //     const [key,value] = e
        //     console.log({key,value})
        // })
  
            const paginados = await allDogs.slice(desde,desde + regXpg);
           const total = await allDogs.length;

           const paginado = paginados.flat();
          
            //console.log(paginado.map(student => student.toJSON()));
        
            return res.status(200).send({dogs:paginado,
                 page: {desde, regXpg, total}})
         }
              
    } catch (error) {
        res.status(400).send(error.message)
    };
 
    
})

dogsRoute.get("/:id", async(req, res) => {
   
    try {
            const { id } = req.params;
            const allDogs = await getAllDogs();
            const dogsApid = allDogs.filter((d) => d.id == id);
            try {
                res.status(200).send(dogsApid[0])
                console.log(dogsApid)
            } catch (error) {
                res.status(400).send("Ei Id no Existe")
            }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
   
})

module.exports = dogsRoute