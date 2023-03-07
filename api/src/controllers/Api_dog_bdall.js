const axios = require('axios');
const { API_KEY } = process.env;
const { Dog, Temperament } = require('../db');

const getApidog = async () => {
    try {
        const apiUrl = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
        const { data } = await axios.get(apiUrl) //el resultado de la peticion se guarda en la variable data
        if(!data) throw new Error(`Error de Status:${data.status}`);
       //min_weight: data.weight.metric.split("-")[0].trim(),
        const dogsFromApi = data.map( dog =>( 
            
            {
                
                id : dog.id,
                name: dog.name,
                heightMin: parseInt(dog.height.metric.split("-") [0]) ? parseInt(dog.height.metric.split("-") [0]) : 27,
                heightMax: parseInt(dog.height.metric.split("-") [1]) ? parseInt(dog.height.metric.split("-") [1]) : 41,
                weightMin: parseInt(dog.weight.metric.split("-") [0]) ? parseInt(dog.weight.metric.split("-") [0]) : 25,
                weightMax:  parseInt(dog.weight.metric.split("-") [1]) ? parseInt(dog.weight.metric.split("-") [1]) : 70,
                life_span: dog.life_span,
                image: dog.image.url,
                created: false,
                //dog.image?.map((dogs) => dogs.url),
                //temperament: dog.temperament.split(', ').map(temp => temp.name),
                temperament: dog.temperament?.split(",").join(', '),
                //una coma y un spacio para que me corte ese valor
                //Temperaments: dog.temperament ? dog.temperament.split(', ').map(temp => ({name:temp})) : null
            }))
                return dogsFromApi;
                
    } catch (error) {
        console.log(error.message);
    }
}

const getDbdog = async () =>{
    try {
        const infoDbdog = await Dog.findAll({
           
            include: 
            {
                model: Temperament,
                 attributes: ['name'],
            // //     //  through: {
            // //     //      attributes: []
            // //     //  }
             }
        })

        const mapDbdog = infoDbdog.map((e) => {
            return {
                id: e.id,
                name: e.name,
                heightMin: e.heightMin,
                heightMax: e.heightMax,
                weightMin: e.weightMin,
                weightMax: e.weightMax,
                life_span: e.life_span,
                image: e.image,
                created: e.created,
                //temperament: e.temperament.split(",").join(', '),
                temperament: e.temperament,
                //temperament: e.temperaments.map((e) =>{return e.name}).join(', '),
            }
            
        })
        return mapDbdog
    } catch (error) {
        console.log(error.message);
    }
   
    //return[]
};

const getAllDogs = async () => {
    const APIinfo = await getApidog();
    const DBInfo = await getDbdog();
    //const allDogs = APIinfo.concat(DBInfo);
    const allDogs = [...APIinfo, ...DBInfo]
    return allDogs;
}

const getDogs = async (searchedName) => {
    let allDogs = await getAllDogs();
    let foundBreeds = allDogs.filter(dog => dog.name.toLowerCase().includes(searchedName));
    return foundBreeds;
}

const getPaginado = async (desde,regxpag) => {
    let allDogs = await getAllDogs();
    let foundBreeds = allDogs.find({},'buscando').skip((desde)).limit(regxpag)
    return foundBreeds;
}
module.exports = {
                    getApidog,
                    getDbdog,
                    getAllDogs,
                    getDogs,
                    getPaginado,
                
                }