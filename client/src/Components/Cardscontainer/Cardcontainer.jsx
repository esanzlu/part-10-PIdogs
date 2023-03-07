import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
//import populares from '../../Css/Popularescards.module.css'
import contenido from './Cardcontainer.module.css'

function Cardcontainer() {
    //const dogs = useSelector(state => state.dogs)
    const dogb = useSelector(state => state.dog)
    console.log(dogb)
    //console.log(`soy el dog actual: ${dogs}`)
    //console.log(dogs)
  return (
    <div >
   
          <div className={contenido.contenido}>
            {dogb.map(dogbs =>{
               return <Card 
                id={dogbs.id}
                key={dogbs.id}
                name={dogbs.name}
                weightMin={dogbs.weightMin}
                weightMax={dogbs.weightMax}
                life_span={dogbs.life_span}
                image ={dogbs.image}
                temperament={dogbs.temperament}
            />
        })}
        </div>
       
    </div>
  )
}
//temperament={dog.Temperaments.map((e) =>e.name)}

export default Cardcontainer