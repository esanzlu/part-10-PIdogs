import { FILTERDB_PI, getDetail, GET_DETAIL, GET_DOGS, GET_DOG_NAME, GET_PAGINADO, GET_TEMPERAMENTS, LIMPIAR_DOG, ORDER_X, ORDER_XP, ORDER_XTEMP, POST_DOGS, LIMPIAR_DET } from "./actions";

const initialState = {
    dogs: [],
    dog: [],
temperaments: [],
    details: [],

}

export default function reducer (state = initialState, action) {

    switch (action.type) {
        case GET_DOGS: // ESTO ES EL TYPE Y TAMBIEN TIENE UN PAYLOAD ES EL ARRAY CON TODOS LOS DOGS DENTRO
            return {...state, dogs: action.payload, dog: action.payload, temperaments: action.payload}
        
        case GET_DOG_NAME: // ME TRAE LA ACTION Y LOS DATOS DEL NOMBRE BUSCADO EN EL PAYLOAD
            return {...state, dog: action.payload}
                    
        case GET_PAGINADO:
            return {...state, dogs: action.payload, dog: action.payload}
        
        case GET_TEMPERAMENTS:
            return {...state, temperaments: action.payload}

        case ORDER_XTEMP:
            // const allDogs = state.dog
            const filterTemp = action.payload === "All" ? state.dogs : state.dogs.filter((e)=> e.temperament?.includes(action.payload))
            console.log(filterTemp)
            //console.log(filterTemp.map(temp => temp.toJSON()))
          // console.log(students.map(student => student.toJSON()));
            //if(filterTemp.length !== 0) throw new Error("Error al Cargar los datos")
            //const error = [{id:1 , error: "No hay games en este genero"}]
            //const verificacion = filterTemp.length !== 0 ? filterTemp : error
            return {...state, dog: filterTemp}

        case ORDER_X:
           const order = state.dogs.sort((a,b) =>{
            if(action.payload === 'ascendente'){
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(b.name.toLowerCase() < a.name.toLowerCase()) return 1;
                return 0;
            } else{
                if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                if(b.name.toLowerCase() < a.name.toLowerCase()) return -1;
                return 0;
            }
           })
           return {...state, dog:[...order]}

           case ORDER_XP:
            const orderPeso = state.dogs.sort((a,b) =>{
             if(action.payload === 'weightMin'){
                 if(a.weightMin < b.weightMin) return -1;
                 if(b.weightMin < a.weightMin) return 1;
                 return 0;
             } else{
                 if(a.weightMin < b.weightMin) return 1;
                 if(b.weightMin < a.weightMin) return -1;
                 return 0;
             }
            })
            return {...state, dog:[...orderPeso]}


        case FILTERDB_PI:
            const filtradb = action.payload === 'create' ? state.dogs.filter((e) => e.created) : state.dogs.filter((e) => !e.created)
            return{...state, dog:[...filtradb]}   
        
        case POST_DOGS:
            return {...state, dog: [...state.dog, action.payload] }

            //return {...state, dogs: [...state.dogs, action.payload] }

        case GET_DETAIL:
            return {...state, details: action.payload}   

        case LIMPIAR_DET:
            return {...state, details: action.payload}    

        case LIMPIAR_DOG: //ESTO LIMPIARA EL ARRAY CON LA VARIABLE RESET
            return {...state, dog: action.payload}

        
        default:
            return {...state}
    }
}