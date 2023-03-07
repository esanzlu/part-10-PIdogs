import React, { useState, useEffect} from 'react'
import '../../App.css';
import destaques from '../../Css/Destaques.module.css'
import populares from '../../Css/Popularescards.module.css'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { getDogs, getPaginado, getTemperaments, ordenarx, ordenarxp, ordenarxtemp, filDb_Pi} from '../../Redux/actions';
import Cardcontainer from '../Cardscontainer/Cardcontainer';
import Search from '../Search/Search';


//1 cuando se monta 2que haga del dispatch
//vamos a manejar el ciclo de vida cuando se monta con useEffect()
//Que haga el dispatch usaremos con el useDispatch()


export default function Home() {
  const dispatch = useDispatch();
  const [paginado, setPaginado] = useState(0);
  const [, setOrder] = useState();
  const [, setOrderpeso] = useState();
  const temperaments = useSelector(state => state.temperaments)
//ordenando, en la action orderx
const handlerOrder = (e) => {
  dispatch(ordenarx(e.target.value))
  setOrder(e.target.value);
} 

const handleOrder_peso = (e) => { 
  dispatch(ordenarxp(e.target.value))
  setOrderpeso(e.target.value);
}

const filterTemp = (e) => {
   dispatch(ordenarxtemp(e.target.value))
  }
const filtradoFrom = (e) => {
  dispatch(filDb_Pi(e.target.value))
}  
const inicio = () =>{
    dispatch(getDogs())
    setPaginado(0)
}
const aumentar = () => {
  setPaginado(paginado + 8)
  

}
const disminuir = () => {
  setPaginado(paginado - 8)
 
}

  useEffect(() => {
    if (paginado > 0) {
      dispatch(getPaginado(paginado));
    } else {
      dispatch(getTemperaments());
      console.log(dispatch(getTemperaments()))
      dispatch(getDogs());
     
    }
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginado,dispatch]);
  
  return (
    <div>
    
    <main className='contenido'>
    <section className={destaques.destaques}>
        <div className={destaques.destaques__principal}>
          <div className={destaques.destaques__box}>
          <h3 className={destaques.destaques__titulo}>RAZAS DE PERRITOS</h3>
          </div>
          
         <Search />
          
        </div>
        <div className={`${destaques.destaques__secundario} ${destaques.destaques__box}`}>
          <h3 className={destaques.destaques__titulo}>PUG</h3>
        </div>
        <div className={`${destaques.destaques__secundario} ${destaques.destaques__box}`}>
          <h3 className={destaques.destaques__titulo}>BOXER</h3>
        </div>
               
      </section>
      
       <section >
        <div>
            <div>
              <div>
              <h4>
                Principales filtros de Consultas
              </h4>
              <div className={populares.populares__contenido}>
        <select
        className={populares.populares__select}
         
          onChange={(e) => handlerOrder(e)}
        >
          <option hidden>Order Alphabetically</option>
          <option value="ascendente">A to Z</option>
          <option value="descendente">Z to A</option>
        </select>

        <select className={populares.populares__select}
         onChange={(e) => handleOrder_peso(e)}
        >
          <option hidden>Order by weight</option>
          <option value="weightMin">Min weight</option>
          <option value="weightMax">Max weight</option>
        </select>

        <select
          className={populares.populares__select}
          onChange = {filterTemp}
        >
          <option hidden>All temperaments</option>
          <option value="All">All</option>
          if(getTemperaments !== 0) ?
          {
            temperaments.map((e) =>(
              <option key={e.id} value={e.name}>{e.name}</option>
            ))
          }
         :
         null
        </select>

        <select 
          className={populares.populares__select}
          onChange = {(e) => filtradoFrom(e)}
          >
          
          <option hidden>Filtered dogs</option>
          <option value="create">Dogs from database</option>
          <option value="dbDogsapi">Dogs from Api</option>
        </select>
          <Link to="/create">
        <button className={destaques.destaques__button}>Nuevo Dog</button>
        </Link>
      </div>
          <div>
         <button onClick={() => inicio()}>Inicio</button>
          </div>
          <div>
         {paginado > 0 &&<button onClick={() => disminuir()}>Anterior</button>}
          </div>
          <div>
            <span>Pagina</span>
            <span>{paginado}</span>
          </div>
          <div>
            <button onClick={() => aumentar()}>Siguiente</button>
          </div>
              
              </div>
              <div  >
                <Cardcontainer />
    
              
        </div>
            </div>
            </div>
            </section>  
            
    </main>
    <footer className='footer'>Todos los Derechos Reservados &copy; EsanzSoft </footer>
    </div>
  )
}
