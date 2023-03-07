import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom'
import destaques from '../../Css/Destaques.module.css'
import fondo from '../../Img/wallpaperdog.jpg'

export default function Landing() {
  return (
    <div>
    {/* <h1>Bienvenido a Nuestra Pagina de Razas</h1> */}
    <main clasName={destaques.destaques}>
    <section className={destaques.destaques}>
        <div className={destaques.destaques__principal}>
          <div className={destaques.destaques__box}>
          <h3 className={destaques.destaques__titulo}>RAZAS DE PERRITOS</h3>
          </div>
          <div className={destaques.destaques__landing}>
          <Link to="/home">
          <button className={destaques.destaques__btnlanding}>HOME PAGE</button>
          </Link>
          </div>
        </div>
        <div className={`${destaques.destaques__secundario} ${destaques.destaques__box}`}>
          <h3 className={destaques.destaques__titulo}>PUG</h3>
        </div>
        <div className={`${destaques.destaques__secundario} ${destaques.destaques__box}`}>
          <h3 className={destaques.destaques__titulo}>BOXER</h3>
        </div>
               
      </section>
      
    </main>
    </div>
  )
}
