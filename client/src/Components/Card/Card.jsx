import React from 'react'
import populares from '../../Css/Popularescards.module.css'
import { Link } from 'react-router-dom';
function Card(props) {
 //console.log(props)
  return (
    
    <div className ={populares.populares__card}>
        <img className={populares.populares__imagen}   src={props.image} alt={props.name}/>
        <div className={populares.populares__card___base}>
        {/* <div className ={populares.populares__hover}> */}
        <div className={populares.populares__card___header}>
        <Link to={`/home/${props.id}`}><h4 className={populares.populares__card___titulo}>{props.name }</h4></Link>
        
        </div>

          <div>
          <p className={populares.populares__card___description}>Temperamentos:{props.temperament} </p>
          <br />
          <p className={populares.populares__card___description}>{`Peso: ${props.weightMin} - ${props.weightMax}`}</p>
          
         
          
          </div>
          
        </div>
       
        
        
    </div>
    
  )
}

export default Card