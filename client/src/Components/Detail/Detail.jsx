import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getDetail , limpiardet } from '../../Redux/actions.js'
import style from './Detail.module.css'
function Detail() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const myDogs = useSelector(state => state.details)
  
    useEffect(() => {
      dispatch(getDetail(id))
      return function () {
        dispatch(limpiardet())
      }
    },[dispatch, id])
    console.log(myDogs)
  
    return (
      <div className= {style.fondoDetail}>
        { myDogs ? (
          <div className= {style.contenedorGeneral}>
            <h1 className= {style.tituloName}>{myDogs.name}</h1>
            <img className= {style.image} src={myDogs.image} alt=""/>
            <div className= {style.contenedorSecundario}>
              <h4 className= {style.items}>{`Altura:${myDogs.heightMin} - ${myDogs.heightMax} `} </h4>
              <h4 className= {style.items}>{`Peso: ${myDogs.weightMin} -  ${myDogs.weightMax}`}</h4>
              <h4 className= {style.items}>Temperamentos: {myDogs.temperament}</h4>
             <h4 className= {style.items}>Description: </h4>
             </div>
            <Link to="/home">
            <button className= {style.buttonBack}>Home</button>
            </Link>
          </div>
        ): null}
      </div>
    )
        }
export default Detail