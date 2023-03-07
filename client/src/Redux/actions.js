import axios from 'axios';
export const GET_DOGS = "GET_DOGS";
export const GET_DOG_NAME = "GET_DOG_NAME";
export const LIMPIAR_DOG = "LIMPIAR_DOG";
export const GET_PAGINADO = "GET_PAGINADO";
export const ORDER_X = "ORDER_X";
export const ORDER_XP = "ORDER_XP";
export const ORDER_XTEMP = "ORDER_XTEMP";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTERDB_PI = "FILTERDB_PI";
export const POST_DOGS = "POST_DOGS";
export const GET_DETAIL = "GET_DETAIL";
export const LIMPIAR_DET = "LIMPIAR_DET";

export function getDogs(){
    return async function(dispatch){
        const apiDog = await axios.get("http://localhost:3001/dogs");
        const dogs = apiDog.data.dogs
       // const dogsp = apiDog.data.page
       // console.log(dogs)
       // console.log(dogsp)
        dispatch({type: GET_DOGS, payload: dogs})
        // .catch((error) => {
        //     console.log(error)
        // })
    }
    
}

export function getDogname(name){
    return async function(dispatch){
        const apiDog = await axios.get(`http://localhost:3001/dogs?name=${name}`)
        //console.log(apiDog.data[0].name)
        if(apiDog.data.length == 0) return window.alert(`No hay Dog  con este Nombre ${name}`);
        
        dispatch({
            type: GET_DOG_NAME,
            payload: apiDog.data
        })
        // .catch((error) => {
        //     console.log(error);
        // })
    }
}

export function getPaginado(desde){
    return async function(dispatch){
        const apiDog = await axios.get(`http://localhost:3001/dogs/?desde=${desde}`)
        //const dogs = apiDog.data.dogs
        //const apiDog = await axios.get("http://localhost:3001/dogs/?desde=10");
         // console.log(apiDog.data[0].desde)
         console.log(apiDog.data.dogs)
        dispatch({
            type: GET_PAGINADO,
            payload: apiDog.data.dogs
        
        })
        // .catch((error) => {
        //     console.log(error);
        // })
    }
}

export function getTemperaments() {
    return async function(dispatch){
    const apiDogTemp = await axios.get("http://localhost:3001/temperaments");
        console.log(apiDogTemp.data)
        dispatch ({type: GET_TEMPERAMENTS, payload: apiDogTemp.data })
    }
}


export function ordenarx(payload) {
    return {
        type: ORDER_X,
        payload,
    }
}

export function ordenarxp(payload) {
    return {
        type: ORDER_XP,
        payload,
    }
}

export function ordenarxtemp(payload) {
    return {
        type: ORDER_XTEMP,
        payload,
    }
}

export function filDb_Pi(payload) {
    return {
        type: FILTERDB_PI,
        payload,
    }
}

export function postDogs(payload){

    return async function (){
        try {
            const json = await axios.post("http://localhost:3001/temperaments", payload)
            return json.data
        } catch (error) {
            console.log(error)
        }
    }
    // return async function (dispatch){
       
    //         const json = await axios.post("http://localhost:3001/temperaments", payload)
    //         return (
    //             dispatch({
    //             type: POST_DOGS,
    //             payload:json.data,
    //         }) )
       
    // }
}
export function getDetail(id){
    return function (dispatch) {
        axios.get(`http://localhost:3001/dogs/${id}`)
        .then(dog =>{
             dispatch({
                type: GET_DETAIL,
                payload: dog.data
            });
        })
        .catch((err) =>console.log(err));
    }
    
}
export function limpiardet(){
    const limp = [];
    return function (dispatch) {
        dispatch({
            type: LIMPIAR_DET,
            payload: limp
        })
    }
}
export function limpiarDog(){
    const reset = [];
    return function(dispatch) {
        dispatch({
            type: LIMPIAR_DOG,
            payload: reset
        })
        // .catch((error) => {
        //     console.log(error);
        // })
    }
}