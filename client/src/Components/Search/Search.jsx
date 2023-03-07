import React,{useState} from 'react'
import destaques from '../../Css/Destaques.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getDogs, getDogname, limpiarDog } from '../../Redux/actions';

function Search() {
    const [input, setInput] = useState("");
    const [errors, setErrors] = useState({});
    const regex = /^[0-9a-zA-ZÁ-ÿ.:-\s]{0,40}$/;
    const dispatch = useDispatch();
    const dogb = useSelector(state => state.dog)
    const handleInputChange = (e) => {
      setInput(e.target.value)
      if(!regex.exec(e.target.value)){
        e.target.value.length > 20 ? setErrors({name:'Nombre muy largo de lo permitido'}): setErrors({name:'Caracteres Ingresados no son Permitidos'})
      }else{
        setErrors({name:''})
      }
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(dogb.length == 0)return dispatch(getDogs()) 
        //window.alert('No hay Dog  con este Nombrexxx');
           
        if(input !== ""){
          dispatch(getDogname(input))
          setInput("")
        // console.log(dispatch(getDogname(input)))
          dispatch(limpiarDog())
       
        // console.log(dispatch(limpiarDog()))
       } else{
        setErrors({name:'Por favor ingresa el Nombre del Dog a Buscar'})

      }
  
    }
  return (
    <div>
         <div className={destaques.destaques__busqueda}>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
          <input name='name' type="text" placeholder="Ingresa el Nombre a Buscar" className={destaques.destaques__input} value={input} onChange={(e) => handleInputChange(e)}></input> 
          
          <button type='submit' className={destaques.destaques__button}>Buscar</button>
          {errors.name && 
          <div>
            <p>{errors.name}</p>
          </div>
          }
          </form>
          </div>
          
    </div>
  )
}

export default Search