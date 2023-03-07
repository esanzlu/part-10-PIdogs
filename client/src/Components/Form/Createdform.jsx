import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { getDogs, getTemperaments, postDogs} from '../../Redux/actions';
import style from '../../Css/Createdform.module.css'

function Createdform() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const allDogs = useSelector(state => state.dogs)
    const temperament = useSelector(state => state.temperaments)
    const [input, setInput] = useState(
        {
            name: "",
            heightMin: "",
            heightMax: "",
            weightMin: "",
            weightMax: "",
            life_span: "",
            image: "",
            temperament:[],

        });
    const [errors, setErrors] = useState(
        {
            name: "",
            heightMin: "",
            heightMax: "",
            weightMin: "",
            weightMax: "",
            life_span: "",
            image: "",
            temperament:[],
        });

        useEffect(()=>{
            dispatch(getDogs())
            dispatch(getTemperaments())
            console.log(dispatch(getTemperaments()))
            
        },[dispatch])

        const validate = (input) => { //validamos el estado del input
            if(!input.name){
                setErrors({...errors, name:"Necesita Colocar un Nombre"})
            }
            else if(allDogs.find(e => e.name === input.name)){
                setErrors({...errors, name:"el nombre ya existe"})
            }
        }

        const changeHandle = (e) => {
            const property = e.target.name
            const value = e.target.value
            validate({...input,[property] : value})
            setInput({
              ...input,[property] : value  //va a setearse modificando la propiedad y se le da el valor. 
            });
          }
          const handleSelect = (e) => {
            setInput({
              ...input,
              temperament: input.temperament.includes(e.target.value) 
              ? input.temperament
              : [...input.temperament, e.target.value]
            })
          }

          const handleDelete1 = (e) => {
            setInput({
              ...input,
              temperament: input.temperament.filter((el) => el !== e)
            })
          }

          const handleSubmit = (e) => {
            e.preventDefault()
            dispatch(postDogs(input))
            setInput({
                name: "",
                heightMin: "",
                heightMax: "",
                weightMin: "",
                weightMax: "",
                life_span: "",
                image: "",
            temperament:[],
            })
            navigate("/home")
          }

  return (
    <div className={style.fondoVGCreate}>
    <div className={style.contenedorAll}>
    <Link to="/home">
      <button className={style.buttonBackHome} >Retornar al Inicio</button>
    </Link>
    <h1 className={style.titulo}>Crear Raza</h1>
    <form onSubmit={handleSubmit}>
      <div className={style.item}>
        <label className={style.label}>Name: </label>
        <br></br>
          <input 
          className={style.input}
          type= "text"
          value= {input.name}//toman el valor lo que tenga en el estado
          name = "name"
          onChange={changeHandle}
          />
          <span>{errors.name}</span>
      </div>
      <div className={style.item}>
        <label className={style.label}>Altura Min: </label>
        <br></br>
          <input 
          className={style.input}
          type= "number"
          value= {input.heightMin}//toma el valor del tm y lo iguala al estado
          name = "heightMin"
          onChange={changeHandle}
          />
      </div>

      <div className={style.item}>
        <label className={style.label}>Altura Max:</label>
        <br></br>
          <input 
            className={style.input}
            type= "number"
            value= {input.heightMax} //toma el valor del tama;o max y lo igual al estado
            name = "heightMax"
            onChange={changeHandle}
            />
      </div>

      <div className={style.item}>
        <label className={style.label}>Peso Min</label>
        <br></br>
          <input 
            className={style.input}
            type= "number"
            value= {input.weightMin} //toma el peso min
            name = "weightMin"
            onChange={changeHandle}
            />
      </div>

      <div className={style.item}>
        <label className={style.label}>Peso Max</label>
        <br></br>
          <input
            className={style.input}
            type= "number"
            value= {input.weightMax} //toma el peso max
            name = "weightMax"
            onChange={changeHandle}
            />
      </div>

      <div className={style.item}>
        <label className={style.label}>Años de Vida</label>
        <br></br>
          <input
            className={style.label}
            type= "text"
            value= {input.life_span} //toma el valor de a;o de vida
            name = "life_span"
            onChange={changeHandle}
            />
      </div>

      <div className={style.item}>
        <label className={style.label}>Imagen</label>
        <br></br>
          <input
            className={style.label}
            type= "text"
            value= {input.image} //toma el link de la imagen
            name = "image"
            onChange={changeHandle}
            />
      </div>

      <div className={style.item}>
        <label className={style.label}>Lista de Temperamentos</label>
        <br></br>
        <select 
          className={style.select}
          defaultValue="select"
          onChange = {handleSelect}
          >
          <option className={style.select} disabled>Select</option>
          {
            temperament?.map((e) => {
              return (
              <option className={style.select} value={e.name} key={e.id}>{e.name}</option>
              )})
          }
          </select>
          
          <ul className="ul">
              {input.temperament.map((e) => (
                <li key={e} className={style.listaGP}>
                  <div className={style.divGP}>
                    {e + " "}
                    <button className={style.buttonx} type='button' onClick={() => handleDelete1(e)}>
                      X
                    </button>
                  </div>
                </li>
              ))}
          </ul>
      </div>  

      
      <br></br>
      <button className={style.buttonCreate} type='submit'>Crear Razas</button>
    </form>
  </div>
</div>
  )
}

export default Createdform