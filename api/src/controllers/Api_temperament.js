const axios = require('axios');
const { API_KEY } = process.env;

const { Temperament } = require('../db');

const onlyTemperament = async () => { 
try {
    const apiUrl = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
    const { data } = await axios.get(apiUrl) //el resultado de la peticion se guarda en la variable data
    if(!data) throw new Error(`Error de Status:${data.status}`);
    const tempFromApi = await data.map( temp => `${temp.temperament}`)
    const temparray = tempFromApi.toString().trim().split(', ').sort();
    const temparray2 = temparray.join(',').trim().split(',').sort();
    const setTempsFromApi = [...new Set(temparray2)];
       
    setTempsFromApi.forEach(e => {
             Temperament.findOrCreate({
                where: {name: e}
            });
    })
    
    const allTemps = await Temperament.findAll();
    return allTemps
    
} catch (error) {
    console.log(error.message)
}

}

module.exports = {onlyTemperament}