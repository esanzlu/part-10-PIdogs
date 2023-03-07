import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css'


function NavBar() {
  return (
    <div className='header'>
        <Link to="/home">Home</Link>
        <Link to="/create">Form</Link>

    </div>
  )
}

export default NavBar